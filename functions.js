// example 1

// functions are a block of code dedicated to perform a specific task
// it excutes when called/invoked
function add(){
    let number1 = 60
    let number2 = 70
    let result = number1 + number2
    console.log(result)
}
// add()


// example 2
function greetNate(name){
    return `Hey ${name} how are you?`
}
const result =  greetNate('Nate')
console.log(result)

// example 3
const greeting = () => {
    const name = 'JStar'
    const alert = `hey ${name} its time to sleep. Switch off your phone`
    console.log(alert)
}
greeting()