const calculator = {
  currentValue: 0,
  add(number) {
    this.currentValue = this.currentValue + number;
  },

  subtract(number) {
    this.currentValue = this.currentValue - number;
  },

  multiply(number) {
    this.currentValue = this.currentValue * number;
  },

  divide(number) {
    if (number === 0) {
      console.log("Cannot divide 0");
      return;
    }
    this.currentValue = this.currentValue / number;
  },
  reset() {
    this.currentValue = 0;
  },
};

function validateInput() {
  if (!input.value) {
    display.value = "Please enter number first";
    return false;
  }
  return true;
}

let operator = null;

const display = document.getElementById("display");
const input = document.getElementById("inputNumber");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
const equalBtn = document.getElementById("equal");
const outBtn = document.getElementById("out");

addBtn.addEventListener("click", () => {
  validateInput();
  operator = "+";
});

subBtn.addEventListener("click", () => {
  validateInput();
  operator = "-";
});

mulBtn.addEventListener("click", () => {
  validateInput();
  operator = "*";
});

divBtn.addEventListener("click", () => {
  validateInput();
  operator = "/";
});

equalBtn.addEventListener("click", () => {
  const number = Number(input.value);
  validateInput();

  if (operator === "+") {
    calculator.add(number);
  } else if (operator === "-") {
    calculator.subtract(number);
  } else if (operator === "*") {
    calculator.multiply(number);
  } else if (operator === "/") {
    calculator.divide(number);
  }

  display.value = calculator.currentValue;
  input.value = "";
  operator = null;
});

outBtn.addEventListener("click", () => {
  calculator.reset();
  display.value = 0;
});
