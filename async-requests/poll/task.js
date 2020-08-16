let buttons = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        let div = document.getElementById('poll__title');
        div.textContent = json.data.title;
        for (let answer of json.data.answers) {
            let button = document.createElement('button');
            button.className = 'poll__answer';
            buttons.insertAdjacentElement('beforeend', button);
            button.textContent = answer;
        }
        let buttonsEl = document.getElementsByClassName('poll__answer');
        for (button of buttonsEl) {
            button.onclick = function() {
                alert('Спасибо, ваш голос засчитан!')
            }
        }
    }
}