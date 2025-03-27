const progressBar = document.querySelector(".progress_bar"),
    progressText = document.querySelector(".progress_text");
// used to select HTML elements from a webpage's Document Object Model (DOM) and store them in variables.
const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let time = 30;

progress(10);