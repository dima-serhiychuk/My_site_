var number;
var ifFuncEvaible = false
var firstNum = null;
var secondNum = null;
var result = null;

function setNumber(num) {  
    
    if (ifFuncEvaible === false) {
        if (result !== null) {
            number = document.querySelector('.textBox') 
            number.style.color = "#fff";
            number.innerText = null;
            number.innerText += num;
            firstNum = number.innerText;
            console.log(firstNum + ' FIRST')   
            result = null;
        }
        else {
            number = document.querySelector('.textBox') 
            number.innerText += num;
            firstNum = number.innerText;
            console.log(firstNum + ' FIRST')   
        }
        
    }

    else {
        if (secondNum === null) {
            number.innerText = null;
            number.innerText += num;
            secondNum = number.innerText
            console.log(firstNum)
            console.log(secondNum + ' SECOND')
        }
        else {
            number.innerText += num;
            secondNum = number.innerText
            console.log(firstNum)
            console.log(secondNum + ' SECOND')
        }
    }
    
}

var funcChar

function setFunc (func) {

    if (firstNum !== null && secondNum === null) {
        number.innerText = func;
        funcChar = number.innerText;
        console.log(funcChar);
        ifFuncEvaible = true
    }
    
}

var eaquelNum = false;

function doTheFunc (eaquelNum) {
    if (eaquelNum === true && firstNum !== null & secondNum !== null) {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        number = document.querySelector('.textBox');
        number.style.color = "rgb(109, 60, 60)";

        if (funcChar === "*") {
            result = firstNum * secondNum;
        }
        else if (funcChar === "/") {
            result = firstNum / secondNum;
        }
        else if (funcChar === "+") {
            result = firstNum + secondNum;
        }
        else if (funcChar === "-") {
            result = firstNum - secondNum;
        }
        console.log(result)
        number.innerText = result;
        ifFuncEvaible = false;
        secondNum = null;
        firstNum = null;
    }
}