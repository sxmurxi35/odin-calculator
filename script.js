const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");
const equalBtn = document.querySelector(".equal");

const calc = {
  leftNumber: "",
  rightNumber: "",
  operator: "",
  result: "",
  operatorCalled: false,
};

function updateDisplay(content) {
  display.textContent = content;
}

function getNumber() {
  numBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calc.rightNumber += btn.textContent;
      updateDisplay(calc.rightNumber);
      console.log(calc.rightNumber);
      console.log(calc.leftNumber);
    });
  });
}
getNumber();

function getOperator() {
  operBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (calc.leftNumber == "" || calc.rightNumber == "") {
        calc.operator += btn.textContent;
        if (calc.leftNumber === "") {
          calc.leftNumber = calc.rightNumber;
          calc.rightNumber = "";
        }
        calc.operatorCalled = true;
      } else equal();
    });
  });
}
getOperator();

function equal() {
  calculate(calc.operator, calc.leftNumber, calc.rightNumber);
  console.table(calc);
  updateDisplay(calc.result);
  calc.rightNumber = "";
  calc.leftNumber = "";
  console.log("equal called");
  calc.operatorCalled = false;
}

equalBtn.addEventListener("click", () => {
    if(calc.leftNumber !== '' && calc.rightNumber !== '') equal()
});

function calculate(operator, x, y) {
  const a = Number(x);
  const b = Number(y);

  if (operator === "+") {
    calc.result = add(a, b);
    return calc.result;
  } else if (operator === "-") {
    calc.result = subtract(a, b);
    return calc.result;
  } else if (operator === "x") {
    calc.result = subtract(a, b);
    return calc.result;
  } else if (operator === "/") {
    calc.result = subtract(a, b);
    return calc.result;
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
