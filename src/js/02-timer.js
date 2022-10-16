import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const countdownTimer = document.querySelector('.timer');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0].getTime() < currentDate.getTime()) {
        window.alert("Please choose a date in the future");
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(inputDate, options);