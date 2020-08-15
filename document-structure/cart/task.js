let controlsLeftEl = document.getElementsByClassName('product__quantity-control_dec');
let controlsRightEl = document.getElementsByClassName('product__quantity-control_inc');
let valueEl = document.getElementsByClassName('product__quantity-value');
let controlsLeft = Array.from(controlsLeftEl);
let controlsRight = Array.from(controlsRightEl);
let value = Array.from(valueEl);

for (let i = 0; i < controlsLeft.length; i++) {
    controlsLeft[i].onclick = function() {
        if (value[i].textContent < 2) {
            return;
            
        }
        value[i].textContent -= 1
    }
}

for (let i = 0; i < controlsRight.length; i++) {
    controlsRight[i].onclick = function() {
        let numberQuantity = Number(value[i].textContent);
        value[i].textContent = numberQuantity + 1;
    }
}

let product__addEl = document.getElementsByClassName('product__add');
let product__add = Array.from(product__addEl);
for (let i = 0; i < product__add.length; i++) {
    product__add[i].onclick = function() {
        let cart__products = document.querySelector('.cart__products');
        let cartThing = document.createElement('div');
        let allCartThingEl = document.querySelectorAll('.cart__product');
        let allCartThing = Array.from(allCartThingEl)
        for (let j = 0; j < allCartThing.length; j++) {
            if (allCartThing[j].dataset.id === document.querySelectorAll('.product')[i].dataset.id) {
                document.querySelectorAll('.cart__product-count')[i].textContent = Number(document.querySelectorAll('.cart__product-count')[i].textContent) + Number(value[i].textContent);
                return;
            }
        }
        cartThing.className = 'cart__product';
        cartThing.dataset.id = document.querySelectorAll('.product')[i].dataset.id;
        cartThing.innerHTML = `<img class="cart__product-image" src="${document.querySelectorAll('.product__image')[i].src}"><div class="cart__product-count">${value[i].textContent}</div>`;
        cart__products.insertAdjacentElement('beforeend', cartThing);
    }
}