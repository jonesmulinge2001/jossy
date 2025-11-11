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