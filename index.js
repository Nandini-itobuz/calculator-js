const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'x', '/', '%', 'C', '=', '^', 'AC']

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
  if (symbol === '%') result = (firstValue/100) * secondValue
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

    if (btnValue === 'C' && !firstValue && !secondValue) return null;

    else if (btnValue === 'C' && firstValue && !secondValue) {
      firstValue = parseInt(firstValue/10);
      return display.innerText = firstValue;
    }

    else if (btnValue === 'C' && firstValue && symbol && secondValue) {
      secondValue = parseInt(secondValue/10);
      let stringValure = display.innerText.split("").slice(0, -1).join("");
      return display.innerText = stringValure
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


