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

function getOperator() {
  operBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calc.operator = btn.textContent;
      calc.hasOperator = true;
      updateNumber();
    });
  });
}
getOperator();

function updateNumber() {
  if (calc.leftNum !== "") {
    if (calc.hasOperator) {
      calc.rightNum = calc.leftNum;
      calc.leftNum = "";
      updateDisplay("0");
      console.log(calc.rightNum);
    }
  }
}



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
