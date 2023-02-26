const sideInput = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputBox = document.querySelector("#output")

function calculateSumOfSquare(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(Number(sideInput[0].value),Number(sideInput[1].value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
outputBox.innerText = "The length of hypotenuse " + lengthOfHypotenuse
}

 hypotenuseBtn.addEventListener("click", calculateHypotenuse);