const inputOne = document.querySelector(".input-1");
const inputTwo = document.querySelector(".input-2");
const calculateBtnTriangle = document.querySelector("#Calculate-btn");
const triangleOutput = document.querySelector("#triangle-output")

function calculateOfTriangle(a , b){
const areaTringle = (a*b)
return areaTringle;
// console.log(areaTringle)
}




function areaOfTriangle(){
    const areaTringle = calculateOfTriangle(
        inputOne.value, inputTwo.value)
        // (inputTriangle[0].value),
        // (inputTriangle[1].value))
    const divide = Math.floor(areaTringle/2);
    triangleOutput.textContent = "The area of triangle is " + divide;
        }

calculateBtnTriangle.addEventListener("click",areaOfTriangle)