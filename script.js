const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

let calc = {
  leftNumber: "",
  rightNumber: "",
  operator: "",
  result: "",
  operatorCalled: false,
};

function clear() {
  clearBtn.addEventListener("click", () => {
    calc = {
      leftNumber: "",
      rightNumber: "",
      operator: "",
      result: "",
      operatorCalled: false,
    };
    updateDisplay("0");
  });
}
clear();

function updateDisplay(content) {
  if (display.textContent.length <= 7) {
    display.textContent = content;
  } else if (content == "0") {
    display.textContent = content;
  }
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
      if (
        (calc.leftNumber == "" || calc.rightNumber == "") &&
        calc.result === ""
      ) {
        calc.operator = "";
        calc.operator += btn.textContent;
        if (calc.leftNumber === "") {
          calc.leftNumber = calc.rightNumber;
          calc.rightNumber = "";
        }
        calc.operatorCalled = true;
      } else if (calc.result !== "") {
        calc.operator = "";
        calc.operator += btn.textContent;
        // calc.leftNumber = calc.result;

        calc.operatorCalled = true;
        equal();
      } else {
        equal();
        calc.operator = "";
        calc.operator += btn.textContent;
      }
    });
  });
}
getOperator();

function equal() {
  if (calc.rightNumber == "") calc.rightNumber = calc.leftNumber;
  calculate(calc.operator, calc.leftNumber, calc.rightNumber);
  console.table(calc);
  updateDisplay(calc.result);
  calc.rightNumber = "";
  calc.leftNumber = "";
  console.log("equal called");
  calc.operatorCalled = false;
  calc.leftNumber = calc.result;
}

equalBtn.addEventListener("click", () => {
  if (calc.leftNumber !== "" && calc.rightNumber !== "") equal();
});

function calculate(operator, x, y) {
  const a = Number(x);
  const b = Number(y);

  if (typeof a == "number") console.log("a changed type");
  if (typeof b == "number") console.log("b changed type");

  if (operator === "+") {
    calc.result = add(a, b);
    return calc.result;
  } else if (operator === "-") {
    calc.result = subtract(a, b);
    return calc.result;
  } else if (operator === "x") {
    calc.result = multiply(a, b);
    return calc.result;
  } else if (operator === "/") {
    if (a == 0 || b == 0) {
      calc.result = "stoopid";
      return calc.result;
    } else {
      calc.result = divide(a, b);
      return calc.result;
    }
  }
}

function add(a, b) {
  return Math.round(a + b);
}

function subtract(a, b) {
  return Math.round(a - b);
}

function multiply(a, b) {
  return Math.round(a * b);
}

function divide(a, b) {
  return Math.round(a / b);
}
