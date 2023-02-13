# Class 06 Lecture notes

## Objects

### What are they?

- Data Type // Data Structure
- Convenient & Powerful way of storing data and functions
- Use of curly braces and comma separated key/value pairs
- Functions that are stored in objects are referred to as methods

```javascript
let myArr = ['Audrey', 36, true, 'Instructor'];

let person = {
  name: 'Audrey',
  age: 36,
  isRemote: true,
  title: 'Instructor'
}
```

## DOM Manipulation

- 'The DOM' = Document Object Model
- HTML and CSS come together in the browser - JS reads this as an object

### Step for DOM Manipulation in JS

```javascript

// JS needs a window into your HTML or into the DOM
// STEP 1
let section = document.getElementById('my-section');
let body = document.querySelector('body');

// STEP 2 - Create elements // h2Element = <h2></h2>
const h2Element = document.createElement('h2');

// STEP 3 - give context if necessary
h2Element.textContent = 'Hey! I\'m an h2!'
// <h2>Hey I'm an h2!</h2>

// STEP 4 - add it to the DOM
// parentElement.appendChild(child)
section.appendChild(h2Element);

// <section>
//    <h2></h2>
// </section>
```
