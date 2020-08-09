let menuLink = document.getElementsByClassName('menu__link');
let links = Array.from(menuLink);
for (let link of links) {
    link.onclick = function() {
      link.nextElementSibling.classList.toggle('menu_active');
      return false;
    }
}