const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
      console.log("Khong the chia cho 0");
      console.log("Vui long nhap lai");
      return;
    }
    this.currentValue = this.currentValue / number;
  },

  reset() {
    this.currentValue = 0;
  },
};

function Calculator() {
  console.log("============================================");
  console.log("Gia tri hien tai:", calculator.currentValue);
  rl.question(
    "Hay chon phep tinh cua ban +, -, *, / hoac exit hoac reset: ",
    (operator) => {
      if (operator === "exit") {
        console.log("Da thoat chuong trinh");
        rl.close();
        return;
      }

      if (operator === "reset") {
        console.log("Da reset chuong trinh");
        calculator.reset();
        Calculator();
        return;
      }

      rl.question("Nhap so ban muon :", (input) => {
        const number = Number(input);

        if (isNaN(number)) {
          console.log("So khong hop le hay nhap lai");
          Calculator();
          return;
        }

        if (operator === "+") {
          calculator.add(number);
        } else if (operator === "-") {
          calculator.subtract(number);
        } else if (operator === "*") {
          calculator.multiply(number);
        } else if (operator === "/") {
          calculator.divide(number);
        } else {
          console.log("Phep tinh khong hop le");
        }

        console.log("Gia tri hien tai:", calculator.currentValue);
        Calculator();
      });
    },
  );
}

Calculator();
