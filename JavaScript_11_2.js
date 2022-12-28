"use strict";

const text_fields = document.querySelectorAll('.text_field');

text_fields.forEach(text_field => {
    text_field.addEventListener('keyup', changeFontColor);
});
function changeFontColor(e){
    if(e.keyCode === 82){
        text_fields.forEach(text_field => {
            text_field.style.color = 'red';
        });
    }
    else if(e.keyCode === 71){
        text_fields.forEach(text_field => {
            text_field.style.color = 'green';
        });
    }
    else if(e.keyCode === 66){
        text_fields.forEach(text_field => {
            text_field.style.color = 'blue';
        });
    }
}