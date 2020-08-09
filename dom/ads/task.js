function rotation() {
    let spansEl = document.querySelectorAll('.rotator__case');
    let spans = Array.from(spansEl);
    for (let span of spans) {
        if (spans[5].classList.contains('rotator__case_active')) {
            spans[5].classList.remove('rotator__case_active');
            spans[0].classList.add('rotator__case_active');
            break;
        } else if (span.classList.contains('rotator__case_active')) {
        span.classList.remove('rotator__case_active');
        span.nextElementSibling.classList.add('rotator__case_active');
        break;
        }

    }
}
setInterval(rotation, 1000);