"use strict"

let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


for (let i = 1; i <= 9; i++) {   
      getHole(i).onclick = function() {
                if (this.className.includes('hole_has-mole')) {
                    dead.textContent = Number(dead.textContent) + 1;
                } else {
                    lost.textContent = Number(lost.textContent) + 1;
                }
                checkWinner(); 
          }
        
    }

function checkWinner() {
    if (dead.textContent == 10) {
        alert ('ура, ты выиграл! давай еще!');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if (lost.textContent == 5) {
        alert ('ты проиграл, давай сначала')
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
