const progressBar = document.querySelector(".progress_bar"),
    progressText = document.querySelector(".progress_text");
// used to select HTML elements from a webpage's Document Object Model (DOM) and store them in variables.
const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [],
    time = 30,
    score = 0,
    currentquestion,
    timer;

const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector("#num_questions");
    category = document.querySelector("#category");
    difficulty = document.querySelector("#difficulty");
    timePerQuestion = document.querySelector("#time");
    quiz = document.querySelector("#time");
    startscreen = document.querySelector("#time");
