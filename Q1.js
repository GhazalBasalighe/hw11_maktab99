/*
Implement an abstract class called Shape.
- Shape class must have a private property called shapeName and 
two methods to calculate area and perimeter.
NOTE: Accessing private properties in this class and other classes 
must be through setters and getters.
- Implement a class called Polygon that is derived from Shape 
(inheritance) that has width and height properties (private) and 
customize the calcArea and calcPerimeter methods for this class.
- Implement a class called NonPolygon that is derived from Shape 
(inheritance) that has radius property (private) and customize the 
calcArea and calcPerimeter methods for this class.
- Implement Rectangle and Square classes derived (inherited) from 
Polygon
- Implement Circle derived from NonPolygon
- Implement Cylinder derived from Circle that has height property 
(private)
NOTE: all classes must have their own customized methods to calculate area 
and perimeter
*/

//-------SHAPE CLASS-------
class Shape {
  #shapeName;

  //constructor for initialization
  constructor(shapeName) {
    this.#shapeName = shapeName;
  }

  //accessing the shapeName property from outside is only possible with getter/setter
  get shapeName() {
    return this.#shapeName;
  }

  //for changing the shapeName after initializing
  set shapeName(newName) {
    //validation
    if (typeof newName === "string") {
      return (this.#shapeName = newName);
    } else {
      console.error("shape name can only be a string!");
    }
  }

  //   methods for calculation of area and perimeter
  calcArea() {
    console.log(`The area of this ${this.#shapeName} is : `);
  }
  calcPerimeter() {
    console.log(`The perimeter of this ${this.#shapeName} is : `);
  }
}

//-------POLYGEN CLASS-------
class Polygon extends Shape {
  #width;
  #height;
  constructor(shapeName, width, height) {
    super(shapeName);
    this.#height = height;
    this.#width = width;
  }
}

//-------NON POLYGEN CLASS-------
class NonPolygon extends Shape {
  #radius;
  constructor(shapeName, radius) {
    super(shapeName);
    this.#radius = radius;
  }
}

const myExampleShape = new Shape("Recatangle");
// accessing shape name with getter
console.log(myExampleShape.shapeName);
//changing shape name with setter
myExampleShape.shapeName = "Circle";
console.log(myExampleShape.shapeName);
//testing the string validation
myExampleShape.shapeName = 123;
console.log(myExampleShape.shapeName);
//calling the methods
console.log(myExampleShape.calcArea());

const myExamplePolygen = new Polygon("Square", 54, 10);
const myExampleNonPolygen = new NonPolygon("Circle", 3);
