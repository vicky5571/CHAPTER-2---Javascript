// 1. Ubah Background Color Body
const changeBodyColor = document.getElementById("tombolUbahWarna");

changeBodyColor.addEventListener("click", function () {
  document.body.classList.toggle("light-blue");
});

// 2. Acak Warna
const randomizeBodyColor = document.createElement("button");
const teksTombol = document.createTextNode("Randomize Color");
randomizeBodyColor.appendChild(teksTombol);
randomizeBodyColor.setAttribute("type", "button");
changeBodyColor.after(randomizeBodyColor);

randomizeBodyColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// 3. Slider Warna
const redSlider = document.querySelector("input[name=redSlider]");
const greenSlider = document.querySelector("input[name=greenSlider]");
const blueSlider = document.querySelector("input[name=blueSlider]");
redSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
greenSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
blueSlider.addEventListener("input", function () {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// 4. Mousemove color changer
document.body.addEventListener("mousemove", function (event) {
  // Posisi Mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
});
