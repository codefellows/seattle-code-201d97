# Class 02 Lecture Notes

## JavaScript

JavaScript is a **loosely typed** and **dynamic** language.

- Loosely typed: we don't need to know the type of data before declaring a variable
- Dynamic: we can change the type of data after the variable have been declared

- `let dog;`
- `dog = 'woof';`
- `dog = 3;`

## Data Types

### Strings

- Sequence of character that will represent text.
- `'hello'`, `'f320rm32ifeowfadjfa'`

### Numbers

- numeric data type
- full numbers, decimals, negatives

### Boolean

- logical data type
- `true` or `false`
- `truthy` or `falsey`

### Undefined

- it hasn't been defined yet
- `let dog;`

### Null

- has been defined but as none
- `let dog = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false
