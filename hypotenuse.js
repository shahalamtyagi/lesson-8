const sideInput = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputBox = document.querySelector("#output")

function calculateSumOfSquare (a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}

function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt (sumOfSquare)
outputBox.innerText = "The length of hypotenuse " + lengthOfHypotenuse
}

hypotenuseBtn.addEventListener("click", calculateSumOfSquare)