"use strict";

let get_a_discount = document.getElementById('get_a_discount');
let x = get_a_discount.getBoundingClientRect().left;
let y = get_a_discount.getBoundingClientRect().top;
let width = 200;
let hight = 40;

window.addEventListener('mousemove', button_escape);
function button_escape(){
    //console.log(event.clientX);
    
    if(event.clientX >= x && event.clientX <= (x + width) && event.clientY >= y && event.clientY <= (y + hight)){
        get_a_discount.style.marginLeft = Math.floor(Math.random() * (1200 - width)) + 'px';
        get_a_discount.style.marginTop = Math.floor(Math.random() * (900 - hight)) + 'px';
        x = get_a_discount.getBoundingClientRect().left;
        y = get_a_discount.getBoundingClientRect().top;
    }
}
