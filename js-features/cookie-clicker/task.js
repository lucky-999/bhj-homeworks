"use strict"

let clickNumber = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
cookie.onclick = function() {
    clickNumber.textContent = Number(clickNumber.textContent) + 1;
    if (cookie.width === 200) {
        cookie.width = 150;
    } else if (cookie.width === 150) {
        cookie.width = 200;
    }
}