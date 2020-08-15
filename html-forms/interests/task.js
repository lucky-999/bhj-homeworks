let checkboxs = document.querySelectorAll('.interest__check');
let checkboxAll = Array.from(checkboxs);

checkboxAll[0].addEventListener('change', () => {
    if (checkboxAll[1].checked && checkboxAll[2].checked) {
        checkboxAll[1].checked = false;
        checkboxAll[2].checked = false;
    } else {
        checkboxAll[1].checked = true;
        checkboxAll[2].checked = true;
    }
});

checkboxAll[3].addEventListener('change', () => {
    if (checkboxAll[4].checked && checkboxAll[5].checked) {
        checkboxAll[4].checked = false;
        checkboxAll[5].checked = false;
    } else {
        checkboxAll[4].checked = true;
        checkboxAll[5].checked = true;
    }
});