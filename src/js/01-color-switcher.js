const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalID = null;

stopButton.disabled = true;

startButton.addEventListener("click", () => {
    body.style.backgroundColor = getRandomHexColor();
    intervalID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});
stopButton.addEventListener("click", () => {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(intervalID);
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}