const headingElement = document.getElementById("heading");
const answerElement = document.getElementById("answer");
const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");

document.addEventListener("DOMContentLoaded", setTitle);
askButton.addEventListener("click", askQuestion);

function askQuestion() {
    if (questionInput.value.trim() === "") {
        answerElement.textContent = "";
        return;
    }

    const answers = ["Yes", "No", "Maybe"];

    answerElement.textContent = answers[Math.floor(Math.random() * answers.length)];
    questionInput.value = "";
}

function setTitle() {
    const titles = ["Ask away!", "Ask me anything.", "Ask damnit!", "Just ask already..."];
    headingElement.textContent = titles[Math.floor(Math.random() * titles.length)];
}
