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

if (document.cookie !== null) {
    document.querySelector('.numberC').innerText = document.cookie(text.value);
    document.querySelector('.numberC1').innerText = document.cookie(text1.value);
}
else {
    document.querySelector('.numberC').innerHTML = null;
    document.querySelector('.numberC1').innerHTML = null;
}

function setVal() {
    var cookieValue = document.getElementById('inp').value;
    var cookieValue1 = document.getElementById('inp1').value;
    document.cookie = "text=" + encodeURIComponent(cookieValue);
    document.cookie = "text1=" + encodeURIComponent(cookieValue1);
    alert(document.cookie);
    document.querySelector('.numberC').innerText = decodeURIComponent(cookieValue);
    document.querySelector('.numberC1').innerText = decodeURIComponent(cookieValue1);
}