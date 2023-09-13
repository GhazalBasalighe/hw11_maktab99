//SELECTING DOM ELEMENTS
const perimeterPlaceHolder = document.querySelector(".perimeter");
const areaPlaceHolder = document.querySelector(".area");
const dropDownList = document.querySelector("#shapes");

const radiusInput = document.querySelector("#Radius");
const widthInput = document.querySelector("#Width");
const heightInput = document.querySelector("#Height");
const sideInput = document.querySelector("#Side");

let selectedOption;
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

  console.log(selectedOption);
});
