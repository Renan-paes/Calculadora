const numbers = document.querySelectorAll(".number");
const arrayNumbers = Array.from(numbers);
const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");
const beforeClear = document.querySelector(".beforeClear");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");
const reverse = document.querySelector('.reverse');
const percentage = document.querySelector('.percentage');

function getNumber(event) {
  const shortcut = event.target.innerText;

    if (shortcut === "x") {
    displayTop.innerHTML += "*";
  } else if (shortcut === "÷") {
    displayTop.innerHTML += "/";
  } else if (shortcut === ",") {
    displayTop.innerHTML += ".";
  }else if (shortcut === "%"){
    displayTop.innerText +=  '/100'
    finalResult()
  }else {
    displayTop.innerHTML += shortcut;
  }
}

function displayClear() {
  displayTop.innerHTML = "";
  displayBottom.innerHTML = "";
}

function displayBeforeClear() {
  displayTop.innerHTML = displayTop.innerHTML.substring(0,displayTop.innerHTML.length - 1
  );
}

function finalResult(){
  let res = eval(displayTop.innerHTML)
  if(res === undefined){
   displayBottom.innerHTML = ''
 }else{
    displayBottom.innerHTML = res.toFixed(2).replace('.00','')
    displayTop.innerHTML = res.toFixed(2).replace('.00','')
  }
}

function reversePolarity(){
  displayTop.innerHTML = displayBottom.innerHTML * '-1'
  displayBottom.innerHTML = displayBottom.innerHTML * '-1'
}



reverse.addEventListener('click', reversePolarity)

beforeClear.addEventListener("click", displayBeforeClear);

result.addEventListener("click", finalResult);

clear.addEventListener("click", displayClear);

arrayNumbers.forEach((number) => {
  number.addEventListener("click", getNumber);
});
