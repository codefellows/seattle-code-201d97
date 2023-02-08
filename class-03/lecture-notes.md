# Class 03 Lecture Notes

## Arrays

- Data type -- Data Structure **special type of object**
- A collection or a list of elements
  - Can be mixed - can store numbers, strings, other arrays all in the same array structure
- Don't have to determine the size of our array
- Every element in the array has a position - referred to as its index
  - Array are zero based index

```js
//                0     1   2        3
let myArray = ['hello', 1, true, 'goodbye'];
```

- Array also have built-in method
  - `.push()` - add an element or elements to the end of your array
  - `.pop()` - remove the last element in an array

- Array properties
  - `.length` - tell you how many elements are in the array

## Loops

### For

- Great for looping/iterating and doing something for a certain number of times
- Great for looping through arrays! (arrays have a length)

```javascript
// anatomy of an for loop
for(starting value; condition; increment){
  do something until that condition is no longer true;
}
```

### While

- Doing something until a condition is no longer true
- Beware of infinite loops!

```javascript
// anatomy of a while loop
while(condition){
  run until that condition is no longer true
}
```
