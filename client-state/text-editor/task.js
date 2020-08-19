let textarea = document.getElementById('editor');
textarea.oninput = function() {
    localStorage.value = textarea.value;
}
window.onload = function() {
    if (localStorage.value !== undefined) {
        textarea.value = localStorage.value;
    }
}