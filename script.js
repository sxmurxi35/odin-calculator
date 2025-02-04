const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

let calc = {
  leftNum: "",
  rightNum: "",
  operator: "",
  result: null,
  hasOperator: false,
  donePrevious: true,
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

function clear() {
  clearBtn.addEventListener("click", () => {
    calc = {
      leftNum: "",
      rightNum: "",
      operator: "",
      result: null,
      hasOperator: false,
      donePrevious: true,
    };
    updateDisplay("0");
  });
}
clear();

function calculate(operator, x, y) {
  const a = Number(x);
  const b = Number(y);
  if (operator === "+") {
    return (calc.result = add(a, b));
  } else if (operator === "-") {
    return (calc.result = subtract(b, a));
  } else if (operator === "x") {
    return (calc.result = multiply(a, b));
  } else if (operator === "/") {
    return (calc.result = divide(b, a));
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
