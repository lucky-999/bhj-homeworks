let dropDownListEl = document.getElementsByClassName('dropdown__list');
let dropDownList = Array.from(dropDownListEl);
let dropdown = document.querySelector('.dropdown')
dropdown.onclick = function() {
    dropDownList[0].classList.toggle('dropdown__list_active');
}

let dropdown__itemEl = document.getElementsByClassName('dropdown__item');
let dropdown__item = Array.from(dropdown__itemEl);
let dropdown__value = document.querySelector('.dropdown__value');
let dropdown__linkEl = document.getElementsByClassName('dropdown__link');
let dropdown__link = Array.from(dropdown__linkEl);
for (i = 0; i < dropdown__item.length; i++) {
    dropdown__link[i].onclick = function() {
        dropdown__value.textContent = this.textContent;
        return false;
    }
}