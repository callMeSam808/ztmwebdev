var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	const makingColorCode = '0123456789ABCDEF';
	let finalCode = '#';
	for (let counter = 0; counter < 6; counter++) {
		finalCode += makingColorCode[Math.floor(Math.random() * 16)];
	}
	return finalCode;
}

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));"

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
	color1.value = setRandomColor();
	color2.value = setRandomColor();
	setGradient();
});