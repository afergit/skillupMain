const mainContainer = document.querySelector(".color-generator-container");
const colorLabel = document.querySelector(".color-label");
const generatorButton = document.querySelector(".generate-button");
const optionPanel = document.querySelector(".option-panel");
const gearButton = document.querySelector(".gear-button");
const colorOptions = document.getElementsByClassName("op");

let colorTypeSelected = "hex";

console.log(colorOptions);

updateColor("hex");

for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].addEventListener("click", ()=>{
    colorTypeSelected = colorOptions[i].value;
    hidePanel();
  });
}

function updateColor(colorType) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;

  if (colorType === "hex") {
    let redHex = red.toString(16).toUpperCase().padStart(2, "0"); // FF
    let greenHex = green.toString(16).toUpperCase().padStart(2, "0"); // FF
    let blueHex = blue.toString(16).toUpperCase().padStart(2, "0"); // FF

    color = `#${redHex}${greenHex}${blueHex}`;
  }

  mainContainer.style.backgroundColor = color;
  colorLabel.innerText = color;
}

function hidePanel() {
  optionPanel.classList.toggle("hide-panel");
}

generatorButton.addEventListener("click", () => {
  updateColor(colorTypeSelected);
});

gearButton.addEventListener("click", hidePanel);