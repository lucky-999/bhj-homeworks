let arrowsElems = document.getElementsByClassName('slider__arrow');
let slidersElems = document.getElementsByClassName('slider__item');
let sliders = Array.from(slidersElems);
let arrows = Array.from(arrowsElems);



arrows[0].onclick = function() {
    let indexActiveSlide = sliders.findIndex((element) => element.className.includes('slider__item_active'));
    let activeSlide = sliders.find((element) => element.className.includes('slider__item_active'));
    activeSlide.classList.remove('slider__item_active');
    if (indexActiveSlide === 0) {
        sliders[sliders.length - 1].classList.add('slider__item_active');
    } else {
        sliders[indexActiveSlide - 1].classList.add('slider__item_active');
    }
}

arrows[1].onclick = function() {
    let indexActiveSlide = sliders.findIndex((element) => element.className.includes('slider__item_active'));
    let activeSlide = sliders.find((element) => element.className.includes('slider__item_active'));
    activeSlide.classList.remove('slider__item_active');
    if (indexActiveSlide === (sliders.length - 1)) {
        sliders[0].classList.add('slider__item_active');
    } else {
        sliders[indexActiveSlide + 1].classList.add('slider__item_active');
    }
}