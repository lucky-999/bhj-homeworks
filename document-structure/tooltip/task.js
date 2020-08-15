let aEl = document.getElementsByClassName('has-tooltip');
let a = Array.from(aEl);
for (let i = 0; i < a.length; i++) {
  let div = document.createElement('div');
  a[i].after(div);
  div.classList.add('tooltip');
  div.textContent = a[i].title;
  let position = a[i].getBoundingClientRect();
  div.style.marginLeft = `${position.left}px`;
}
let divsEl = document.getElementsByClassName('tooltip');
let divs = Array.from(divsEl);


for (let i = 0; i < a.length; i++) {
  a[i].onclick = function(e) {
    e.preventDefault();
    if (divs[i].style.display === 'block') {
      divs[i].style.display = 'none';
    } else {
      divs[i].style.display = 'block';
    }
  }
}