class Car {
    constructor(){
        this.wheels = 4
        this.modelYear = 2007
        this.lights = "off"
        this.turnSignal = "off"
        this.speed = 0
    }
    powerLights(power) {
        if (power === "off"){
        this.lights = "off"
        } else if (power === "on") {
        this.lights = "on"
        } else {
            return "No lights present"
        }
    }
    signal(direction) {
        if (direction === "left"){
        this.turnSignal = "left"
    } else if (direction === "right") {
        this.turnSignal = "right"
        } else {
            return "Turn signal off"
        }
    }
    acceleration(fast){
        this.speed += fast
            }
    deceleration(slow){
        if (this.speed > 0){
        this.speed -= slow
    } else if (this.speed <=0) {
        return "Car is fully stopped!"
        }
    }
}



class Tesla extends Car{
    constructor(){
        super()
        this.modelYear = "1997"
    }
}

var myTesla = new Tesla





//Class Car is created and given the attribute of 4 wheels.


var myCar = new Car


















class Toyota extends Car{
    constructor(){
        super()
    }
}

var myToyota = new Car



class Tata extends Car{
    constructor(){
        super()
    }
}

var myTata = new Car
