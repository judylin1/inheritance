function Vehicle(capacity, wheels, color){
  this.capacity = capacity;
  this.wheels = wheels;
  this.color= color;
}

Vehicle.prototype.rePaint = function(newColor){
  console.log("This vehicle was painted " + this.color);
  this.color = newColor;
  console.log("It is now painted " + this.color);
}

var v = new Vehicle(4, 4, 'purple')
v.rePaint('yellow')

function Bike(color, gears){
  //A bike always has 2 wheels and a capacity of 1.
  Vehicle.call(this, 1, 2, color); //call vehicle and set it to the bike instance
  //this.capacity = 1; <-it’s like writing what’s above here
  //this.wheels = 2;
  //this.color = color;
  this.gears = gears;
}

Bike.prototype = new Vehicle(); //<-says bike constructor is now the vehicle. this allows you to use rePaint in bike. this is setting up the inheritance.

Bike.prototype.pedal = function(){
  console.log("PEDAL PEDAL PEDAL, SO TIRING!")
}

function Car(capacity, color, fuelType){
  //A car has a variable capacity, but always 4 wheels.
  Vehicle.call(this, capacity, 4, color);
  this.fuelType = fuelType;
}

Car.prototype = new Vehicle(); <-this gives us rePaint

Car.prototype.fillTank = function(){
  console.log("You fill the tank with " + this.fuelType + " gas.")
}

var b = new Bike("purple", 21);
b.pedal(); <-from bike prototype
b.rePaint("black”); <-from vehicle

var c = new Car(5, "Silver", "Premium")
c.fillTank();
c.rePaint("Dark Green");
