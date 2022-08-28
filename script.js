var isChangerOn = false;
var mainBlock = document.querySelector('.main');

function changeTheame () {
    if (isChangerOn === false) {
        mainBlock.style.background = 
        " linear-gradient(90deg, rgb(96, 196, 56), rgb(57, 117, 49))"
        isChangerOn = true
    }  
    else {
        mainBlock.style.background =
        "linear-gradient(90deg, rgb(76,76,185), rgb(76, 145, 185))"
        isChangerOn = false
    }   
}

var result;
document.querySelector('.numberC').innerText = result;

function setVal() {
    var cookieValue = document.getElementById('inp').value;
    document.cookie = encodeURIComponent(cookieValue);
    alert(document.cookie);  
    return result = decodeURIComponent(cookieValue);
}

