// if statements syntax
// if(condition) {

//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

// Example
// let age = 8;
// if (age >= 18) {
//     console.log("You are an adult.")
// } else {
//     console.log("You are a minor.");
// }



// if else if statements syntax
// if (condition1) {
//     // logic
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // logic
//     // code to be executed if condition2 is true
// } else {
//     // logic
//     // code to be executed if none of the conditions are true
// }


// example
// let age = 67;
// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age < 65) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior citizen.");
// }


// for loop syntax
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }
// Example 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// Example 2
// for (let i = 1; i <= 10; i++) {
//     console.log('i is currently at ' +i);
// }


// while loop syntax
// while (condition) {
//     // code to be executed
//     // increment/decrement
// }


// Example
// let i = 0; // initialization
// while (i < 5) {
//     console.log(i);
//     i++;// 0,1,2,3,4
// }


// switch statement syntax
// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     default:
//         // code to be executed if expression doesn't match any case
//         break;
// }


// Example
let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("Today is neither Monday nor Tuesday.");
        break;
}