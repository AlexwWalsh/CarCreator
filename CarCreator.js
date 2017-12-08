class Car {
    constructor(){
        this.wheels = 4
        this.modelYear = 2007
        this.lights = "off"
        this.turnSignal = "off"
    }
    powerLights(power) {
        if (power == "off"){
            

        }
    }
    turnOff() {
        this.lights = "off"
    }

}



var myCar = new Car


//Class Car is created and given the attribute of 4 wheels.

















class Tesla extends Car{
    constructor(){
        super()
        this.modelYear = "1997"
    }
}

var myTesla = new Tesla



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
