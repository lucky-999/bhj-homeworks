let items = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let img = document.getElementById('loader');
        img.classList.remove('loader_active');
        let valuteX = JSON.parse(xhr.responseText);
        let valutesAll = valuteX.response.Valute;
        for (valute in valutesAll) {
            let itemEl = document.createElement('div');
            itemEl.className = 'item';
            items.insertAdjacentElement('beforeend', itemEl)
            let div = document.createElement('div');
            itemEl.insertAdjacentElement('beforeend', div);
            div.className = 'item__code';
            div.textContent = valutesAll[valute].CharCode;
            let div1 = document.createElement('div');
            div1.className = 'item__value';
            itemEl.insertAdjacentElement('beforeend', div1);
            div1.textContent = valutesAll[valute].Value;
            let div2 = document.createElement('div');
            div2.className = 'item__currency';
            itemEl.insertAdjacentElement('beforeend', div2);
            div2.textContent = 'Руб.';
        }
    }
}