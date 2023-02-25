const angleInput = document.querySelectorAll(".angle-Input");
const triangleBtn = document.querySelector("#triangle-Btn");
const outputBox = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  // console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(angleInput[0].value),
    Number(angleInput[1].value),
    Number(angleInput[2].value)
  );
  if (sumOfAngles === 180) {
    outputBox.innerText = "yay, The angles from a triangle ";
  } else {
    outputBox.innerText = "oh oh! The angles don't from a triangle";
  }
}

triangleBtn.addEventListener("click", isTriangle);
