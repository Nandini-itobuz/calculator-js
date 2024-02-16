const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ac = document.getElementById("ac");
const c = document.getElementById("c");
const inp = document.getElementById("calc-input ");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const mul = document.getElementById("multiply");
const equal = document.getElementById("equal");
const divide = document.getElementById("division");
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
let stringQueue = [];

function addToQueue(input) {
  stringQueue.push(input);
}

function calculate() {
  let numQueue = [];
  console.log(stringQueue);
  let dotCounter = 0;
  let dotFlag = 0;
  let numVar = 0;

  if (stringQueue[stringQueue.length - 1]);

  for (let i = 0; i < stringQueue.length; i++) {
    if (
      stringQueue[i] !== "." &&
      stringQueue[i] !== "+" &&
      stringQueue[i] !== "-" &&
      stringQueue[i] !== "*" &&
      stringQueue[i] !== "/"
    ) {
      numVar = numVar * 10 + stringQueue[i];
      if (dotFlag === 1) {
        dotCounter++;
      }
    }
    if (stringQueue[i] === ".") {
      if (dotFlag === 1) {
        alert("Error! Please Enter Valid Input");
      }
      dotFlag = 1;
    }
    if (
      stringQueue[i] === "+" ||
      stringQueue[i] === "-" ||
      stringQueue[i] === "*" ||
      stringQueue[i] === "/"
    ) {
      let numPower = Math.pow(10, dotCounter);
      numVar = numVar / numPower;
      dotFlag = 0;
      dotCounter = 0;
      numQueue.push(numVar);
      numQueue.push(stringQueue[i]);
      numVar = 0;
    }
  }

  let numPower = Math.pow(10, dotCounter);
  numVar = numVar / numPower;
  numQueue.push(numVar);
  console.log(numQueue);

  let answer = numQueue[0];
  for (let i = 1; i < numQueue.length; i = i + 2) {
    switch (numQueue[i]) {
      case "+":
        answer += numQueue[i + 1];
        break;
      case "-":
        answer -= numQueue[i + 1];
        break;
      case "/":
        answer /= numQueue[i + 1];
        break;
      case "*":
        answer *= numQueue[i + 1];
        break;
    }
  }

  inp.value = answer;
}

zero.addEventListener("click", () => {
  addToQueue(0);
  inp.value = inp.value + "0";
});

ac.addEventListener("click", () => {
  inp.value = "";
  stringQueue = [];
});

dot.addEventListener("click", () => {
  addToQueue(".");
  inp.value = inp.value + ".";
});

one.addEventListener("click", () => {
  addToQueue(1);
  inp.value = inp.value + "1";
});

two.addEventListener("click", () => {
  addToQueue(2);
  inp.value = inp.value + "2";
});
three.addEventListener("click", () => {
  addToQueue(3);
  inp.value = inp.value + "3";
});
four.addEventListener("click", () => {
  addToQueue(4);
  inp.value = inp.value + "4";
});
five.addEventListener("click", () => {
  addToQueue(5);
  inp.value = inp.value + "5";
});
six.addEventListener("click", () => {
  addToQueue(6);
  inp.value = inp.value + "6";
});
seven.addEventListener("click", () => {
  addToQueue(7);
  inp.value = inp.value + "7";
});
eight.addEventListener("click", () => {
  addToQueue(8);
  inp.value = inp.value + "8";
});
nine.addEventListener("click", () => {
  addToQueue(9);
  inp.value = inp.value + "9";
});

add.addEventListener("click", () => {
  addToQueue("+");
  inp.value = inp.value + "+";
});

minus.addEventListener("click", () => {
  addToQueue("-");
  inp.value = inp.value + "-";
});

mul.addEventListener("click", () => {
  addToQueue("*");
  inp.value = inp.value + "*";
});

divide.addEventListener("click", () => {
  addToQueue("/");
  inp.value = inp.value + "/";
});

c.addEventListener("click", () => {
  if (inp.value === "Infinity") {
    console.log("Infinity");
    inp.value = "";
  } else {
    let x = inp.value.split("").slice(0, -1).join("");
    inp.value = x;
  }
});

equal.addEventListener("click", () => {
  calculate();
});

