
let socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function() {
    socket.emit('chatMessage', {
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', function () {
    socket.emit('chatTyping', username.value);
});

socket.on('MensajesATodosLosSockets', function(data) {
    actions.innerHTML = '';
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
  </p>`
});

socket.on('MensajesATodosLosSocketsMenosElDisfusor', function(data) {
    actions.innerHTML =  `<p><em>${data} esta escribiendo...</em></p>`
});