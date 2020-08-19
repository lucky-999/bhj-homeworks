let signin = document.getElementById('signin');
let button = document.getElementById('signin__btn')
let form = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');

form.onsubmit = function(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    let formdata = new FormData(document.forms[0]);
    xhr.send(formdata);
    xhr.onload = function(e) {
        let response = JSON.parse(xhr.responseText);
        if (response.success === false) {
                alert('Неверный логин или пароль!');
        } else if (response.success === true) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            localStorage.id = String(response.user_id);
            welcome.textContent += response.user_id;
        }
    }
}

window.onload = function() {
    if (localStorage.id !== undefined) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.textContent += localStorage.id
    } else {
        signin.classList.add('signin_active');
    }
}
