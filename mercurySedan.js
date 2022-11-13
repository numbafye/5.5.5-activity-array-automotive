//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberofWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

loadPassenger (num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
    } else {
        console.log(this.model + " " + "not have enough space to take all passengers.");
    }
} else {
    console.log(this.model + " " + this.make + "is full");
}

}

start () {
    if (this.fuel > 0) {
        console.log("engine has started.");
        return this.started = true;
    } else { 
        console.log("fuel tank empty")
        return this.started = false
    }
};

checkService (mileage) {
    if (mileage > 30000) {
    console.log("time for maintenance");
    return this.checkService = true
    
} else {
    console.log("no maintenance required");
    return this.checkService = false
}
}
};

let myCar = new Car ('mercury', 'rad_sedan', '2002', 'white', 50000)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

