/*
Create a class named Polygon that contains the following information:

A constructor method with a parameter named 'args' to capture information (hint: this should be capturing an array of numbers).
assign the parameter to a key using 'this'
Has a method named perimeter, that should do the following:
return ONLY the parameter, or an empty array from the method
call the reduce method on your return value to get a single output value
 

Create a new object/instance of the class Polygon that is stored in a variable named rectangle.

The new Polygon should accept an argument that is an array of 4 numbers
console.log the return value from the newly created Polygon.

p = 3 + 3 + 8 + 8. Since this is a rectangle, the opposite sides have the same lengths, 3 cm. and 8 cm. Add up the lengths of all four sides to find the perimeter.
*/

class Polygon {
    constructor(args){
        this.args = args;
    }
    perimeter(){
        if(args = true){
            return args
        } else {
            return []
        }
    }
}
// this.args.reduce();


p(side1, side2, side3, side4)
p = side1 + side2 + side3 + side4;

let rectangle = new Polygon(side1, side2, side3, side4)
rectangle.p(3, 8, 3, 8)

console.log(rectangle.value)