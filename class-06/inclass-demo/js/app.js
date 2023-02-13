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


// !!! HELPFUL FOR LAB
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// !!! HELPFUL FOR START OF LAB !!!!!

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};

// ********** GLOBALS **************

let kittenSection = document.getElementById('kitten-profiles');

console.dir(kittenSection);

// ********** HELPER FUNCTIONS/UTILITES *********

function randomAge(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ********** OBJECT LITERALS **********


let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'cat nip', 'mice toys'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
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
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'treats', 'fish toys'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/jumper.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
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
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'hunting'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/serena.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
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
  }
};


// ********** EXECUTABLE CODE **********
frankie.getAge();
frankie.render();
console.log(frankie);

jumper.getAge();
jumper.render();
console.log(jumper);

serena.getAge();
serena.render();
console.log(serena);
