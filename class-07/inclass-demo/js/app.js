'use strict';

// Tony is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Tony knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo


// ********** GLOBALS **************

let kittenSection = document.getElementById('kitten-profiles');

let kittenCaboodle = []; // store all of my kitten objects


// ********** HELPER FUNCTIONS/UTILITES *********

function randomAge(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// ********** CONSTRUCTOR FUNCTION *********

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;
}

// ******** PROTOTYPE METHODS **********

Kitten.prototype.getAge = function(){
  this.age = `${randomAge(3,12)} months`;
};

Kitten.prototype.render = function(){
  let articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i < this.interests.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  let pElem = document.createElement('p');
  pElem.textContent = this.age;
  articleElem.appendChild(pElem);


  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
  articleElem.appendChild(imgElem);

  // **** TABLE RENDERING ****** table, rows, table cells
  let table = document.createElement('table');
  articleElem.appendChild(table);

  let row1 = document.createElement('tr');
  table.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Is Good with Cats';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Is Good with Dogs';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Is Good with Kids';
  row1.appendChild(th3Elem);

  let row2 = document.createElement('tr');
  table.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);
};


// ********** EXECUTABLE CODE **********
let frankie = new Kitten('Frankie', ['wet food', 'cat nip', 'mice toys'], true, true, true, 'img/frankie.jpeg' );
let jumper = new Kitten('Jumper', ['dry food', 'treats', 'fish toys'], true, false, false, 'img/jumper.jpeg');
let serena = new Kitten('Serena',['mice', 'lasers', 'hunting'], false, false, false, 'img/serena.jpeg');

// push new kitten to the array
kittenCaboodle.push(frankie, jumper, serena);

console.log(kittenCaboodle);

// helper function that will call all the needed methods

function renderAll(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    kittenCaboodle[i].getAge();
    kittenCaboodle[i].render();
  }
}

renderAll();

// // ********** OBJECT LITERALS **********


// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['wet food', 'cat nip', 'mice toys'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months`;
//   },
//   render: function(){
//     // ***** DOM MANIPULATION *****

//     // STEP 2: Create element
//     let articleElem = document.createElement('article');
//     // STEP 3: Add it to the dom
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };


// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['dry food', 'treats', 'fish toys'],
//   isGoodWithCats: true,
//   isGoodWithDogs: false,
//   isGoodWithKids: false,
//   photo: 'img/jumper.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months`;
//   },
//   render: function(){
//     // ***** DOM MANIPULATION *****

//     // STEP 2: Create element
//     let articleElem = document.createElement('article');
//     // STEP 3: Add it to the dom
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };

// let serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['mice', 'lasers', 'hunting'],
//   isGoodWithCats: false,
//   isGoodWithDogs: false,
//   isGoodWithKids: false,
//   photo: 'img/serena.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months`;
//   },
//   render: function(){
//     // ***** DOM MANIPULATION *****

//     // STEP 2: Create element
//     let articleElem = document.createElement('article');
//     // STEP 3: Add it to the dom
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };





