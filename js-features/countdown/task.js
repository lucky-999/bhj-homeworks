"use strict"

let timer = document.getElementById("timer");
let id = setInterval(time, 1000);
function time() {
    timer.textContent = timer.textContent - 1;
    if (timer.textContent === 0) {
        clearInterval(id);
        alert('Вы победили в конкурсе!');
    }
}