let active__modal = document.getElementById('subscribe-modal');
let close = document.getElementsByClassName('modal__close');

window.onload = function() {
    if (!document.cookie.includes('modal=closed')) {
        active__modal.classList.add('modal_active');
    }
}

close[0].onclick = function() {
    active__modal.classList.remove('modal_active');
    document.cookie = 'modal=closed';
}