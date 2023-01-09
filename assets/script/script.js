document.querySelectorAll(".welcome_slider_elem_out").forEach(item => {item.addEventListener('click', selectWelcome)});
document.querySelectorAll(".welcome_item").forEach(item => {item.addEventListener('mouseover', selectWelcome)});

function selectWelcome(e) {
    var arrSlider = [] = document.querySelectorAll(".welcome_slider_elem_out");
    var arrItem = [] = document.querySelectorAll(".welcome_item");
    var elem = e.target;

    if (elem.className !== "welcome_slider_elem_out")
        for (let i = 0; i < arrSlider.length; i++)
            if (arrItem[i] === elem)
                elem = arrSlider[i];

    for (let i = 0; i < arrSlider.length; i++) {
        if (arrSlider[i] === elem) {
            arrSlider[i].id = "w_slider_out_select";
            arrSlider[i].firstElementChild.id = "w_slider_in_select";
            arrItem[i].id = "w_item_select";
        }
        else if (arrSlider[i].hasAttribute("id") === true) {
            arrSlider[i].removeAttribute("id");
            arrSlider[i].firstElementChild.removeAttribute("id");
            arrItem[i].removeAttribute("id");
        }
    }
}

$(document).ready(function(){
    $(".destination_search_inp").keypress(function (event) {if(event.keyCode == 13){event.preventDefault()}});
    setSlickSlider();
    setHoverEffect();
});

function searchInSlider() {
    var input = $(".destination_search_inp").val().toLowerCase();
    searchInSliderByText(input);
    setSlickSlider();
    setHoverEffect();
}

function searchInSliderByText(input) {
    var temp = [] = $(".destination_item");
    var arr = [];
    for (let i = 0; i < temp.length; i++)
        if ($(temp[i]).parent().parent().prop("className") !== "slick-slide slick-cloned" && $(temp[i]).parent().parent().prop("className") !== "slick-slide slick-cloned slick-active")
            arr.push(temp[i]);
    var maxError = 1;
    var del = false;
    if (input.length > 3)
        maxError = 2;
    if (input.length > 6)
        maxError = 3; 
    for (let i = 0; i < arr.length; i++) {
        var error = 0;
        var out = arr[i].lastElementChild.innerHTML.toLowerCase();
        for (let j = 0; j < input.length; j++) {
            if (out[j] !== input[j]) {
                error++; 
                if (error === maxError) {break}
            }
            if (j === input.length - 1 && error <= maxError) {
                if (del === false) {
                    $('.destination_items').slick('unslick');
                    del = true;
                }
                arr[0].before(arr[i]);
            }
        }
    }
}

function setSlickSlider() {
    $('.destination_items').slick({
        rows: 2,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".destination_btn_move"),
        nextArrow: $(".destination_btn_move.destination_btn_right"),
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {slidesToShow: 2}
            },
            {
                breakpoint: 768,
                settings: {rows: 1, prevArrow: null, nextArrow: null}
            }
        ]
    });
}

function setHoverEffect() {
    $(".destination_item_text, .destination_item_img").on({
        mouseenter: function() {
            $(this).parent().children("img").css({"-webkit-filter": "contrast(100%)"})
        },
        mouseleave: function() {
            $(this).parent().children("img").css({"-webkit-filter": "contrast(50%)"})
        }
    })
}