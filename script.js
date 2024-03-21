let sokcet = new WebSocket('ws://localhost:8080')

sokcet.onopen = ()=>{
    console.log("Goog")
}

sokcet.onmessage = (event)=>{
    console.log(event.data)

}
sokcet.onclose = (event)=>{
    console.log(event.code)
    console.log(event.reason)

}
const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = function() {
            console.log('WebSocket Client Connected');
        };

        ws.onmessage = function(event) {
            console.log('received: ', event.data);
            addMessage(event.data);
        };

        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const message = messageInput.value;
            if (message.trim() !== '') {
                ws.send(message);
                addMessage('Вы: ' + message);
                messageInput.value = '';
            }
        }

        function addMessage(message) {
            const messagesDiv = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.textContent = message;
            messagesDiv.appendChild(messageDiv);
        }