1. Logic Followed
The implemented solution utilizes JavaScript, HTML, and CSS to create a Multiple Choice
Question (MCQ) test with speech-to-text functionality. Here's the breakdown of the logic:
● HTML Structure:
○ Provides the structural layout of the MCQ test, including the question, answer
choices, and UI elements like buttons and feedback areas.
○ <audio> element is used to provide audio feedback for incorrect answers.
● CSS Styling:
○ Ensures visual appeal and responsiveness of the page layout.
○ Includes background image, font sizes, button styling, and color changes for
correct and incorrect answers.
● JavaScript Functionality:
○ Speech Recognition: Utilizes webkitSpeechRecognition API for speech
recognition in Arabic (ar-SA).
○ User Interaction: Handles button clicks to start recording and manage UI states
(disabled/enabled).
○ Text Comparison: Compares recognized speech with the correct answer ( (الرحيم
after normalizing Arabic text by removing punctuation and spaces.
○ UI Updates: Dynamically updates the UI based on correctness of the answer,
displaying feedback messages and changing text color.
○ Audio Playback: Plays a predefined audio file (audio.mp3) for incorrect
answers using the <audio> element.
2. Tools Used
● HTML: Chosen for its capability to structure the content of the MCQ test and integrate
multimedia elements like audio playback.
● CSS: Selected to style and design the HTML elements for better presentation and user
experience, including background images and responsive design.
● JavaScript: Essential for implementing the interactive functionalities of speech
recognition, text processing, UI updates, and audio playback.
● Font Awesome: Provides scalable vector icons used for visual elements like the
microphone and check mark, enhancing the UI's clarity and aesthetics.
3. Limitations of the Solution
● Speech Recognition Accuracy: The accuracy of speech recognition can vary based on
factors such as pronunciation, background noise, and microphone quality. Users with
accents or non-standard pronunciations may experience lower accuracy.
● Browser Compatibility: webkitSpeechRecognition is specific to WebKit browsers
like Chrome. Other browsers may not support Arabic speech recognition or may have
varying levels of support.
● Audio Feedback: The current implementation uses a simple audio file (audio.mp3) for
incorrect answer feedback. More sophisticated feedback mechanisms could provide
clearer guidance to users.
4. Areas of Improvement
● Enhanced User Experience: Implement more interactive and visually appealing
feedback mechanisms for correct and incorrect answers, such as animations or tooltips.
● Cross-Browser Compatibility: Explore alternative speech recognition APIs or fallbacks
for browsers that do not support webkitSpeechRecognition.
● Performance Optimization: Optimize the application's performance, especially during
speech recognition and audio playback, to ensure smooth user interaction and
responsiveness.
By addressing these points, the MCQ test with speech-to-text functionality can be improved to
offer a more robust and user-friendly experience, catering to a broader audience effectively.
