let chat = document.querySelector('.chat-widget');
chat.onclick = function() {
    chat.classList.add('chat-widget_active');
}

let input = document.querySelector('.chat-widget__input');
input.onkeydown = function(e) {
    let enter = String(e.key);
    if (enter == 'Enter') {
        if (!input.checkValidity()) {
            alert('Вы пытаетесь отправить пустое сообщение!');
        }
        let chat = document.querySelector('.chat-widget__messages');
        chat.innerHTML += `<div class="message message_client">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${input.value}</div>
        </div>`;
        chat.innerHTML += `<div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">Добрый день!</div>
    </div>`;
        input.value = '';
    }
}