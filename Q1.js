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
    console.log(`The area of this ${this.#shapeName} `);
  }
  calcPerimeter() {
    console.log(`The perimeter of this ${this.#shapeName} `);
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

  //getter for width and height as an object
  getDimensions() {
    return {
      width: this.#width,
      height: this.#height,
    };
  }

  //overriding methods
  calcArea() {
    console.log(
      `The area of this polygen with
width: ${this.#width} and height: ${this.#height} 
called ${this.shapeName}`
    );
  }
  calcPerimeter() {
    console.log(
      `The perimeter of this polygen with
width: ${this.#width} and height: ${this.#height} 
called ${this.shapeName}`
    );
  }
}

//-------NON POLYGEN CLASS-------
class NonPolygon extends Shape {
  #radius;
  constructor(shapeName, radius) {
    super(shapeName);
    this.#radius = radius;
  }
  get radius() {
    return this.#radius;
  }
  //overriding methods
  calcArea() {
    console.log(
      `The area of this non polygen 
with radius ${this.#radius} called ${this.shapeName}`
    );
  }
  calcPerimeter() {
    console.log(
      `The perimeter of this non polygen 
with radius ${this.#radius} called ${this.shapeName}`
    );
  }
}

//-------RECTANGLE CLASS-------
class Rectangle extends Polygon {
  constructor(shapeName, width, height) {
    super(shapeName, width, height);
  }

  //override and customize methods
  calcArea() {
    const { width, height } = this.getDimensions();
    console.log(
      `The area of this Rectangle with
width: ${width} and height: ${height} 
called ${this.shapeName} is equal to = ${width * height}`
    );
  }
  calcPerimeter() {
    const { width, height } = this.getDimensions();
    console.log(
      `The perimeter of this Rectangle with
width: ${width} and height: ${height} 
called ${this.shapeName} is equal to = ${(width + height) * 2}`
    );
  }
}
//-------SQUARE CLASS-------
/*NOTE : 
this class is extended according to the problem and it does not make any logical sense for a square
to have width and height! even though every square is also a rectangle
The better mathematical approach would be as below:
Shape -> #shapeName
Polygen -> #numberOfSides
Non Polygen -> #radius
Rectangel -> #width , #lenght
Square -> #side
Circle -> nothing extra
Cylinder -> #height
*/
class Square extends Polygon {
  constructor(shapeName, width, height) {
    // T.T wtf is this logic
    super(shapeName, width, height);

    // some sort of validation to help the logic... ?
    if (width !== height) {
      console.log("Careful! Squares don't actually have width and height");
    }
  }

  //override and customize methods
  //literally the same as recatngle bc every square is a rectangle
  calcArea() {
    const { width, height } = this.getDimensions();
    console.log(
      `The area of this Square with
side : ${width} called ${this.shapeName} is equal to = ${width * height}`
    );
  }
  calcPerimeter() {
    const { width, height } = this.getDimensions();
    console.log(
      `The perimeter of this Square with
side : ${width} called ${this.shapeName} is equal to = ${
        (width + height) * 2
      }`
    );
  }
}
//-------CIRCLE CLASS-------
class Circle extends NonPolygon {
  constructor(shapeName, radius) {
    super(shapeName, radius);
  }

  calcArea() {
    //A=πr^2
    console.log(
      `The area of this Circle 
with radius ${this.radius} called ${this.shapeName} is equal to = ${(
        Math.PI.toFixed(2) * Math.pow(this.radius, 2)
      ).toFixed(2)}`
    );
  }
  calcPerimeter() {
    //C=2πr
    console.log(
      `The perimeter of this Circle 
with radius ${this.radius} called ${this.shapeName} is equal to = ${(
        2 *
        Math.PI.toFixed(2) *
        this.radius
      ).toFixed(2)}`
    );
  }
}
//-------CYLINDER CLASS-------
class Cylinder extends Circle {
  #height;
  constructor(shapeName, radius, height) {
    super(shapeName, radius);
    this.#height = height;
  }

  calcArea() {
    //A=2πrh + 2πr^2
    console.log(
      `Surface Area :${(
        2 * Math.PI.toFixed(2) * this.radius * this.#height +
        2 * Math.PI.toFixed(2) * Math.pow(this.radius, 2)
      ).toFixed(2)}
radius ${this.radius}
height ${this.#height}
name ${this.shapeName}
---------------`
    );
    console.log(
      `Lateral Surface Area:${(
        2 *
        Math.PI.toFixed(2) *
        this.radius *
        this.#height
      ).toFixed(2)} 
radius ${this.radius}
height ${this.#height}
name ${this.shapeName}
---------------`
    );
  }
  calcPerimeter() {
    //perimeter of a cylinder is basically a rectangle and two circles on the top and bottom
    // 4πr + 2h = 2(2πr+h)
    console.log(
      `The perimeter of this non polygen 
with radius ${this.radius} called ${this.shapeName} is equal to = ${(
        2 *
        (2 * Math.PI.toFixed(2) * this.radius + this.#height)
      ).toFixed(2)}`
    );
  }
}

/*
const myShape = new Shape("Recatangle");
// accessing shape name with getter
console.log(myShape.shapeName);
//changing shape name with setter
myShape.shapeName = "Circle";
console.log(myShape.shapeName);
//testing the string validation
myShape.shapeName = 123;
console.log(myShape.shapeName);
//calling the methods
console.log(myShape.calcArea());
*/

/*
const myPolygen = new Polygon("Square", 54, 10);
const myNonPolygen = new NonPolygon("Circle", 3);

myPolygen.calcArea();
myNonPolygen.calcPerimeter();
*/

/*
const myRectangle = new Rectangle("test", 10, 5);
myRectangle.calcArea();
myRectangle.calcPerimeter();
*/

/*
const mySquare = new Square("test", 10, 10);
mySquare.calcArea();
mySquare.calcPerimeter();
 */

/*
const myCircle = new Circle("test", 10);
myCircle.calcArea();
myCircle.calcPerimeter();
*/

const myCylinder = new Cylinder("test", 10, 10);
myCylinder.calcArea();
myCylinder.calcPerimeter();
