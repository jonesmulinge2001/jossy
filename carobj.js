const car = {
    brand: 'SUV',
    model: 'Corolla',
    fuel: 50, // liters
    drive: function(distance){
        const fuelused = distance * 0.1;
        if(fuelused > this.fuel){
            console.log('Not enough fuel')
        }
    }
}
console.log(car.model)


let year = prompt('In which year was the ECMAScript-2015 specification published?', );
if (year < 2015) { 
	alert( 'Too early...' ); 
} else if (year > 2015) {
	alert( 'Too late' ); 
} else { 
	alert( 'Exactly!' ); 
}
