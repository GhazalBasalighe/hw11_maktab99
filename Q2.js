//SELECTING DOM ELEMENTS
let perimeter = document.querySelector(".perimeter");
let area = document.querySelector(".area");
const dropDownList = document.querySelector("#shapes");
const submitButton = document.querySelector("#btn");

let radiusInput = document.querySelector("#Radius");
let widthInput = document.querySelector("#Width");
let heightInput = document.querySelector("#Height");
let sideInput = document.querySelector("#Side");

let selectedOption;
let inputValue; // Variable to store the input value
let shape;
// EVENT LISTENERS
dropDownList.addEventListener("change", () => {
  selectedOption = dropDownList.value;

  // Disable all input fields
  radiusInput.setAttribute("disabled", "true");
  widthInput.setAttribute("disabled", "true");
  heightInput.setAttribute("disabled", "true");
  sideInput.setAttribute("disabled", "true");

  switch (selectedOption) {
    case "Circle":
      radiusInput.removeAttribute("disabled");
      break;
    case "Square":
      sideInput.removeAttribute("disabled");
      break;
    case "Rectangle":
      widthInput.removeAttribute("disabled");
      heightInput.removeAttribute("disabled");
      break;
    case "Cylinder":
      radiusInput.removeAttribute("disabled");
      heightInput.removeAttribute("disabled");
  }
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  switch (selectedOption) {
    case "Circle":
      inputValue = radiusInput.value;
      shape = new Circle(inputValue);
      showResult(shape.calcArea(), shape.calcPerimeter());
      // shape.calcArea();
      // shape.calcPerimeter();
      break;
    case "Square":
      inputValue = sideInput.value;
      shape = new Square(inputValue);
      showResult(shape.calcArea(), shape.calcPerimeter());
      // shape.calcArea();
      // shape.calcPerimeter();
      break;
    case "Rectangle":
      inputValue = { Width: widthInput.value, Height: heightInput.value };
      shape = new Rectangle(inputValue.Width, inputValue.Height);
      showResult(shape.calcArea(), shape.calcPerimeter());
      // shape.calcArea();
      // shape.calcPerimeter();
      break;
    case "Cylinder":
      inputValue = {
        Radius: radiusInput.value,
        Height: heightInput.value,
      };
      shape = new Cylinder(inputValue.Radius, inputValue.Height);
      showResult(shape.calcArea(), shape.calcPerimeter());
      // shape.calcArea();
      // shape.calcPerimeter();
      break;
  }
});

//RESETTING INPUT VALUES AFTER REFRESH
document.addEventListener("DOMContentLoaded", () => {
  radiusInput.value = "";
  widthInput.value = "";
  heightInput.value = "";
  sideInput.value = "";
});

// ------------------USING CLASSES AND MAKING INSTANCES------------------
function showResult(a, b) {
  area.textContent = a;
  perimeter.textContent = b;
}
