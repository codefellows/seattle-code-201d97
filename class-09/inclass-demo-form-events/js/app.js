'use strict';


// TODO: STEP 1 GRAB THE ELEMENT I WANT TO LISTEN TO
let myForm = document.getElementById('my-form');



// TODO: STEP 3 DEFINE MY HANDLER
function handleFormSubmit(event){
  // ON ANY FORM HANDLER
  event.preventDefault();
  console.log(event);

  let username = event.target.username.value;
  console.log(username);

  let password = event.target.password.value;
  console.log(password);

  let age = +event.target.age.value;
  console.log(age);
  console.log(typeof age);
}


// TODO: STEP 2 ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleFormSubmit);
