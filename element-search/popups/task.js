let close = document.getElementsByClassName('modal__close');
let modal = document.getElementById('modal_main');
show_success = document.getElementsByClassName('show-success');
modal_success = document.getElementById('modal_success');
close[0].onclick = function() {
    modal.classList.remove('modal_active');
}
show_success[0].onclick = function() {
    modal_success.style.display = 'flex';
    modal.classList.remove('modal_active');
}
close[2].onclick = function() {
    modal.classList.remove('modal_active');
    modal_success.style.display = 'none';
}