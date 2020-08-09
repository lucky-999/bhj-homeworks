let controlsEl = document.querySelectorAll('.font-size');
let controls = Array.from(controlsEl);
let text = document.querySelector('.book');
for (let i = 0; i < controls.length; i++) {
    controls[i].onclick = function(event) {
        event.preventDefault();
        let activeIndex = controls.findIndex((element) => element.classList.contains('font-size_active'));
        controls[activeIndex].classList.remove('font-size_active');
        controls[i].classList.add('font-size_active');
        if (controls[0].classList.contains('font-size_active')) {
            text.className = 'book book_fs-small';
        } else if (controls[1].classList.contains('font-size_active')) {
            text.className = 'book';
        } else if (controls[2].classList.contains('font-size_active')) {
            text.className = 'book book_fs-big';
        }
        
    }
}