"use strict";

window.addEventListener('keydown', messageFunc);
function messageFunc(e){
    
    if(e.keyCode == 83 && e.ctrlKey && e.shiftKey == false){
        alert('Збережено');
    }
    if(e.keyCode == 65 && e.ctrlKey){
        alert('Вибрано все');
    }
    if(e.keyCode == 83 && e.ctrlKey && e.shiftKey){
        alert('Збережено все');
    }
}
