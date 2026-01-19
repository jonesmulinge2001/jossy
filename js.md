JavaScript Data Types

Primitive Data Types
2. String - Text data
let single = 'Hello';
let double = "World";
let backticks = `Hello ${double}`; // Template literal
let quote = "It's awesome";
let length = single.length; // 5

// Common operations
let concat = single + " " + double; // "Hello World"
let upper = single.toUpperCase(); // "HELLO"
let lower = double.toLowerCase(); // "world"
let substring = single.slice(1, 4); // "ell"
let includes = single.includes("ell"); // true



2. Number - Integers and floats
let integer = 42;
let float = 3.14;

// Common operations
let sum = 10 + 5; // 15
let division = 10 / 3; // 3.3333333333333335
let remainder = 10 % 3; // 1 (modulo)
let power = 2 ** 3; // 8 (exponentiation)


3. Boolean - Logical values
let isVerified = true;
let hasToken = false;


4. Undefined - Variable declared but not assigned
let name; // undefined
console.log(unassigned); // undefined
console.log(typeof unassigned); // "undefined"

function noReturn() {}
console.log(noReturn()); // undefined

let obj = {};
console.log(obj.nonExistent); // undefined


5. Null - Intentional absence of value
let password = null;
console.log(empty); // null
console.log(typeof empty); // "object" (historical bug!)

// Common use cases
let user = null; // User is logged out
document.getElementById("nonExistent"); // null


Non-Primitive (Reference) Types
1. Object - Key-value collections
// Object literal
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  greet: function() {
    return `Hello, I'm ${this.name}`;
  },
  // ES6 shorthand
  greetShort() {
    return `Hi, I'm ${this.name}`;
  }
};

// Access properties in an object
console.log(person.name); // "Alice" - dot notation
console.log(person["age"]); // 30 - bracket notation


// Dynamic property names
let key = "isStudent";
console.log(person[key]); // false

// Modification
person.age = 31;
person["city"] = "New York";

// Methods
Object.keys(person); // ["name", "age", "isStudent", "greet", "greetShort"]
Object.values(person); // ["Alice", 31, false, function...]
Object.entries(person); // [["name", "Alice"], ["age", 31], ...]


2. Array - Ordered lists of items
items in an array are called elements and are indexed starting from 0
let numbers = [9, 1, 2, 3, 4, 5];
let mixed = [1, "two", true, null, {x: 10}];

// Access
console.log(numbers[4]); // 5
console.log(numbers.length); // 5

// Common methods used to manipulate arrays
numbers.push(6); // Add to end
numbers.pop(); // Remove from end (5)
numbers.unshift(9); // Add to beginning
numbers.shift(); // Remove from beginning

// Iteration loop through
numbers.forEach(num => console.log(num))


let doubled = numbers.map(num => num * 2);
let filtered = numbers.filter(num => num > 2); 

// Array.isArray() - Check if array
console.log(Array.isArray(numbers)); // true
console.log(typeof numbers); // "object" - careful!


3. Function - Callable objects
function sayHello(name) {
  return `Hello ${name}`;
}

// Functions are objects!
console.log(typeof sayHello); // "function"
console.log(sayHello.length); // 1 (number of parameters)

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (ES6)
const divide = (a, b) => a / b;

// First-class functions
function operate(a, b, operation) {
  return operation(a, b);
}
console.log(operate(5, 3, multiply)); // 15



4. Date - Date and time
let now = new Date();
let specific = new Date("2024-12-25");
let timestamp = new Date(1700000000000);

// Methods
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0-11
console.log(now.getDate()); // 1-31
console.log(now.toISOString()); // "2024-01-01T..."


5. Type Conversion

4. Memory Behavior
let a = 10;
let b = a; // Copy of the value
a = 20;
console.log(a, b); // 20, 10 (independent)




Switch Statement
let dayOfWeek = 'Monday';

switch(dayOfWeek) {
  case 'Monday':
    console.log('Start of the work week!');
    console.log('Time to be productive!');
    break;

  case 'Tuesday':
    console.log('Second day of work');
    break;

  case 'Wednesday':
    console.log('Hump day!');
    break;

  case 'Thursday':
    console.log('Almost Friday!');
    break;

  case 'Friday':
    console.log('TGIF! Weekend is near!');
    break;

  case 'Saturday':
  case 'Sunday':
    console.log('Weekend! Time to relax!');
    break;
    
  default:
    console.log('Invalid day entered');
}
// Output: "Start of the work week!" "Time to be productive!"