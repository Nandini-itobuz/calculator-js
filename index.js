const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'x', '/', '%', 'C', '=', '^', 'AC', 'C']

let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''

const calculate = () => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'x') result = firstValue * secondValue
  if (symbol === '/') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue
  if (symbol === '^') result = Math.pow(firstValue, secondValue);

  display.innerText = result
  firstValue = result
  secondValue = ''
}

for (let button of controlButtons) {
  button.addEventListener('click', () => {
   btnValue = button.innerText
    const btnValueIsSymbol = allSymbols.includes(btnValue)

    if (!secondValue && btnValue === '=') return null

    if(btnValue === "AC"){
      firstValue = secondValue = symbol = ''
      return display.innerText = ''
    }

    if (btnValue === 'C') {
      let clearedValue= display.innerText.split("").slice(0, -1).join("");
      backspaceFunc();
      return display.innerText = clearedValue;
    }

    if (firstValue && btnValueIsSymbol) {
    if (secondValue) {
        calculate();
    }
    symbol = btnValue;
}

    else if (!symbol) firstValue += btnValue
    else if (symbol) secondValue += btnValue
    if (btnValue !== '=') display.innerText += btnValue
  })
}

function backspaceFunc(){
  if(secondValue){
    secondValue= parseInt(secondValue/10);
  }

  if(firstValue){
    firstValue= parseInt(firstValue/10);
  }
}