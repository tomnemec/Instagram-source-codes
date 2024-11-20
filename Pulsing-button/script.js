const pulseButton = document.getElementById('btn-pulse');
const textOutput = document.getElementById('text-output');

// Initialize SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set recognition properties
recognition.continuous = false; // Capture a single phrase
recognition.interimResults = false; // Get final results only
recognition.lang = 'en-US'; // Set language

// Event to handle speech recognition results
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript; // Get the spoken words
  textOutput.textContent = `You said: "${transcript}"`; // Update the text in the <p> element
};

// Handle click event
pulseButton.addEventListener('click', () => {
  // Toggle pulsing animation
  pulseButton.classList.toggle('animate');

  // If animation starts, begin voice recognition
  if (pulseButton.classList.contains('animate')) {
    try {
      recognition.start(); // Start capturing voice
      textOutput.textContent = "Listening..."; // Update text to indicate listening
   
    } catch (error) {
      textOutput.textContent = "Error starting voice recognition.";
    }
  } else {
    recognition.stop(); // Stop capturing voice if button is toggled off
    textOutput.textContent = "Stopped listening."; // Update text to indicate stopping
  }
});
