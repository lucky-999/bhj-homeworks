document.onscroll = function() {
    let blocks = document.getElementsByClassName('reveal');
    for (let block of blocks) {
        const height = window.innerHeight;
        const blockTop = block.getBoundingClientRect().top;
        if (blockTop < 630 && blockTop > -130) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
    }
}