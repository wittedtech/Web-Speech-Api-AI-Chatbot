'use strict';

const socket = io();

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.querySelector('button').addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('speechstart', () => {
    console.log('Speech Detected');
});

recognition.addEventListener('result', (e) => {
    console.log('Result: ');

    let last = e.results.length-1;
    let text = e.results[last][0].transcript;

    outputYou.textContent = text;
    console.log('Confidence: ' + e.results[0][0].confidence);

    socket.emit('chat message', text);
});

recognition.addEventListener('speechend', () => {
    recognition.stop();
});

recognition.addEventListener('error', (e) => {
    outputBot.textContent = 'Error: '+ e.error;
});

function synthesisVoice(text){
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synthesis.speak(utterance);
}

socket.on('bot reply', function(replyText){
    synthesisVoice(replyText);

    if(replyText == '') replyText = '(No Answer...)';
    outputBot.textContent = replyText;
})

