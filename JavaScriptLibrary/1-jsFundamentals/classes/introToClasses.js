/*
-JavaScript classes were introduced in ES5, and is a new way to write JS's previous prototype-based inheritance, which is a way of creating an object that acts as a blueprint.

-Classes acts as a blueprint for creating objects that share methods properties.

-Classes consist of the class name, curly braces, and any properties or methods we include within the curly braces.

-Classes can be written as class expressions or class declarations. // not hoisted

class Automobile{
    // methods and properties go here
} (declaration example) 

let vehicle = class {
    // methods and properties go here
} (expression example)

- The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the new keyword.

- The constructor needs to be included for us to create new objecrs or instances of our class. This allows us to set up properties as well as pass in values for those properties when creating the new instance.

- Each class can only have ONE constructor
*/


/* 
1. Cookie: class name
2. constructor method takes in three parameters, we need to supply the arguments
3. local scope properties AND assigned keys/properties 
4. assigning keys/properies the values that we passed in as arguments
*/

class Cookie {

    constructor(type, icing, shape){
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}

let chocolateChip = new Cookie ("chocolate chip", false, "circle");

class AutomobileEx{
    start(){
        // method executes something
        console.log("Hello");
    }
    stop(){
        console.log("Bye");
    }
}

let newCar = new AutomobileEx();
newCar.start();

//Bronze
class Automobile{
   constructor(make, model){
       this.make = make;
       this.model = model;
   }
   //Silver
   start(){
       console.log("The engine of the " + this.make + " " + this.model + " has started.")
   } 

   stop(){
       console.log("The engine of the " + this.make + " " + this.model + " has stopped.")
   }
}   

// Gold
let newVehicle = new Automobile("Chevy", "Equinox");
newVehicle.start();
newVehicle.stop();


/*
- The extends keyword is used in classs declarations/expressions to create a new class as a child of another class.
- Each new class we create that extends from the parent class not only inherits the properties and methods from the parent class, but it also can have it's own methods and properties.

*/

// Parent
class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food`)
    }
}

//Subclass
// The super method gives us access to the parent class' properties and methods
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    play(){
        console.log(`${this.name} fetches the ball!`)
    }
}

let Saaya = new Dog("Saaya", "German Shepherd");
Saaya.eat();
Saaya.play();