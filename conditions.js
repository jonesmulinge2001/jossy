// let year = prompt('In which year were you born? ')
// if(year < 2002){
//     alert('Too early')
// }
// else if(year == 2004){
//     alert('Perfect guess')
// }
// else{
//     alert('Wrong')
// }


let milk_price = prompt('Enter the price of milk: ')
let bread_price = prompt('Enter the price for bread: ')
let totalc = (Number(milk_price + bread_price));
if(totalc > 100)
    alert('Smart shopping')
else if(totalc < 70)
    alert('Up your game')
else{
    alert('Request for help')
}

// let username = prompt('Enter your username: ');
// let name1 = 'Jossy';
// let name2 = 'JStar';
// if(username == name1 || username == name2){
//     alert('Login successfull');
// }

// let is_student = true;
// let has_gatepass = false;
// if(has_gatepass && is_student){
//     console.log('Access granted')
// }
// else{
//     console.log('No access')
// }

let has_discipline = true;
let has_motivation = false;
let has_a_goal = true
if((has_discipline && has_a_goal) && !has_motivation){
    console.log('You will go far')
}
else{
    console.log('Plan better')
}


// let content; // text message
// let file; // image,doc, video
// if(!content && !file){
//     alert('Button disabled')
// }


// for loop
for (let number = 0; number < 10; number++){
    console.log(number)
}


let fruits = ['Mango','Orange']
let total = 0;
for(let fruit in fruits){
    total = fruits[fruit]
}