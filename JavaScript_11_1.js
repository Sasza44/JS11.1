"use strict";

window.onbeforeunload = () => {
    if(a){
        return "Сучасний браузер проігнорує цей вираз";
    }
}

let a = false;


let text_field = document.getElementById('text_field');
text_field.addEventListener('input', setTrue);

function setTrue(){
    a = true;
}

let button = document.getElementById('save_button');
button.addEventListener('click', setFalse);

function setFalse(){
    a = false;
}