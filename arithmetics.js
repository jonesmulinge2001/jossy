// Arithmetic operations
// +,-,*,/,%
let divFinal = document.getElementById('final')
// let name = 'JStar'
// let number_1 = 30;
// let number_2 = 4;
// let result = number_1 + number_2
// divFinal.innerHTML = result;


// simulating grade calculations
let cat_1 = 22;
let cat_2 = 4;
let final_exam = 47;
let avg_cat = (cat_1 + cat_2) / 2
let final_mark = avg_cat + final_exam;
if(final_mark >= 70){
    alert('Grade is A')
}
else if(final_mark >= 60){
    alert('Grade is B')
}
else if(final_mark >= 50){
    alert('Grade is C')
}
else if(final_mark >= 40) {
    alert('Grade is D')
}
else{
    alert('F')
}
divFinal.innerHTML = final_mark










// Decision making statements
// if, else if, else
// if => executes when the condition is true
// else if => chaining of multiple if conditions
// else => runs / executes when the if condition fails

// assignment operators
// === equal to , >=,<=,
// let age  = 12
// if(age >= 18){
//     console.log('Eligible for voting')
// }
// else if(age < 18){
//     console.log('Not allowed to vote')
// }
// else{
//     console.log('Something went wrong')
// }




// calculating the area of a circle
// pi r*R
// let raduis = 22;
// const pi = 3.142
// let area = pi * raduis * raduis
// console.log(area)

// Gate log
let is_Student = false;
let has_gatepass = false;
if(is_Student){
    console.log('Welcome to the school gates')
}
else{
    console.log('Not allowed to enter the school gates')
}