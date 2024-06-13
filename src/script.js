const startBtn = document.getElementById('start-btn');
const outputDiv = document.getElementById('output');
const dotted = document.getElementById('dotted-word');
const recognition = new webkitSpeechRecognition();
const correctAnswer = 'الرحيم';
const incorrectAudio = document.getElementById('incorrect-audio');
recognition.lang = 'ar-SA'; // Set language to Arabic (Saudi Arabia)

function normalizeArabic(text) {
    return text.replace(/[^\u0621-\u064A]/g, ''); // Range of Arabic characters
}

startBtn.addEventListener('click', () => {
    startBtn.textContent = 'Requesting permission...';
    startBtn.disabled = true;
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {
            recognition.start();
            startBtn.textContent = 'Recording...';
            startBtn.disabled = true;
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
            outputDiv.textContent = 'Error accessing microphone. Please allow microphone access and try again.';
            startBtn.textContent = 'Start Recording';
            startBtn.disabled = false;
        });
});

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.replace(/[.,\s]/g, '');
    if (normalizeArabic(transcript) === normalizeArabic(correctAnswer)) { 
        outputDiv.innerHTML = 'Correct! The answer matches. <i class="fas fa-check" style="color: green;"></i>';
        outputDiv.classList.remove('incorrect');
        outputDiv.classList.add('correct');
        dotted.innerHTML = ` ${correctAnswer} <i class="fas fa-check" style="color: green;"></i>`; // Add tick icon
        startBtn.disabled = true;
        startBtn.remove()
        incorrectAudio.disabled = true;
        incorrectAudio.remove()

    } else {
        outputDiv.textContent = 'Incorrect! Hear the playback and try again.';
        outputDiv.classList.remove('correct');
        outputDiv.classList.add('incorrect');
        startBtn.textContent = 'Start Recording';
        startBtn.disabled = false;
        incorrectAudio.setAttribute('controls', 'controls'); // Add controls attribute
        incorrectAudio.play(); // Play the audio
    }
    
};


recognition.onerror = function(event) {
    outputDiv.textContent = 'Error occurred during recognition. Please try again.';
    outputDiv.classList.remove('correct', 'incorrect'); // Remove any existing classes
    startBtn.textContent = 'Start Recording';
    startBtn.disabled = false;
};

