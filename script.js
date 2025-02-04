const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");

let calc = {
  leftNum: "",
  rightNum: "",
  operator: "",
  hasOperator: false,
};

function updateDisplay(content) {
  display.textContent = content;
}

function getNumber() {
  numBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calc.leftNum += btn.textContent;
      updateDisplay(calc.leftNum);
    });
  });
}
getNumber();



function calculate(operator, a, b) {
  if (operator === "+") {
    add(a, b);
  } else if (operator === "-") {
    subtract(a, b);
  } else if (operator === "*") {
    multiply(a, b);
  } else if (operator === "/") {
    divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
