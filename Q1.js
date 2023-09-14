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
      `The area of this polygen
width: ${this.#width}
height: ${this.#height} 
name: ${this.shapeName}
---------------`
    );
  }
  calcPerimeter() {
    console.log(
      `The perimeter of this polygen
width: ${this.#width}
height: ${this.#height} 
name: ${this.shapeName}
---------------`
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
radius: ${this.#radius} 
name: ${this.shapeName}
---------------`
    );
  }
  calcPerimeter() {
    console.log(
      `The perimeter of this non polygen 
radius: ${this.#radius}
name: ${this.shapeName}
---------------`
    );
  }
}

//-------RECTANGLE CLASS-------
class Rectangle extends Polygon {
  constructor(width, height) {
    super("Rectangle", width, height);
  }

  //override and customize methods
  calcArea() {
    const { width, height } = this.getDimensions();
    console.log(
      `The area of this Rectangle = ${width * height}
width: ${width}
height: ${height} 
---------------`
    );
    return width * height;
  }
  calcPerimeter() {
    const { width, height } = this.getDimensions();
    const perimeter = height * 2 + width * 2;
    console.log(
      `The perimeter of this Rectangle = ${perimeter}
width: ${width}
height: ${height} 
---------------`
    );
    return perimeter;
  }
}
//-------SQUARE CLASS-------
/*NOTE : 
this class is extended according to the problem and it does not make any logical sense for a square
to have width and height! even though every square is also a rectangle
*/
class Square extends Polygon {
  constructor(side) {
    super("Square", side, side);
  }

  //override and customize methods
  //literally the same as recatngle bc every square is a rectangle
  calcArea() {
    const { width, height } = this.getDimensions();
    console.log(
      `The area of this Square = ${width * height}
side : ${width}
---------------`
    );
    return width * height;
  }
  calcPerimeter() {
    const { width, height } = this.getDimensions();
    console.log(
      `The perimeter of this Square = ${width * 2 + height * 2}
side : ${width}
---------------`
    );
    return width * 2 + height * 2;
  }
}
//-------CIRCLE CLASS-------
class Circle extends NonPolygon {
  constructor(radius) {
    super("Circle", radius);
  }

  calcArea() {
    //A=πr^2
    const area = (Math.PI.toFixed(2) * Math.pow(this.radius, 2)).toFixed(
      2
    );
    console.log(
      `The area of this Circle  = ${area}
radius: ${this.radius}
---------------`
    );
    return area;
  }
  calcPerimeter() {
    //C=2πr
    const perimeter = (2 * Math.PI.toFixed(2) * this.radius).toFixed(2);
    console.log(
      `The perimeter of this Circle  = ${perimeter}
radius: ${this.radius}
---------------`
    );
    return perimeter;
  }
}
//-------CYLINDER CLASS-------
class Cylinder extends Circle {
  #height;
  constructor(radius, height) {
    super(radius);
    this.#height = height;
  }

  calcArea() {
    //A=2πrh + 2πr^2
    const sufaceArea = (
      2 * Math.PI.toFixed(2) * this.radius * this.#height +
      2 * Math.PI.toFixed(2) * Math.pow(this.radius, 2)
    ).toFixed(2);
    console.log(
      `Surface Area :${sufaceArea}
radius ${this.radius}
height ${this.#height}
---------------`
    );
    const lateralArea = (
      2 *
      Math.PI.toFixed(2) *
      this.radius *
      this.#height
    ).toFixed(2);
    console.log(
      `Lateral Surface Area:${lateralArea} 
radius ${this.radius}
height ${this.#height}
---------------`
    );
    return sufaceArea;
  }
  calcPerimeter() {
    //perimeter of a cylinder is basically a rectangle and two circles on the top and bottom
    // 4πr + 2h = 2(2πr+h)
    const perimeter = (
      2 *
      (2 * Math.PI.toFixed(2) * this.radius + this.#height)
    ).toFixed(2);
    console.log(
      `The perimeter of this Cylinder= ${perimeter}
radius: ${this.radius}
---------------`
    );
    return perimeter;
  }
}

// const myShape = new Shape("Recatangle");
// // accessing shape name with getter
// console.log(myShape.shapeName);
// //changing shape name with setter
// myShape.shapeName = "Circle";
// console.log(myShape.shapeName);
// //testing the string validation
// myShape.shapeName = 123;
// console.log(myShape.shapeName);
// //calling the methods
// console.log(myShape.calcArea());

// const myPolygen = new Polygon("Square", 54, 10);
// const myNonPolygen = new NonPolygon("Circle", 3);

// myPolygen.calcArea();
// myNonPolygen.calcPerimeter();

// const myRectangle = new Rectangle(10, 5);
// myRectangle.calcArea();
// myRectangle.calcPerimeter();

// const mySquare = new Square(10);
// mySquare.calcArea();
// mySquare.calcPerimeter();

// const myCircle = new Circle(10);
// myCircle.calcArea();
// myCircle.calcPerimeter();

// const myCylinder = new Cylinder(10, 10);
// myCylinder.calcArea();
// myCylinder.calcPerimeter();
