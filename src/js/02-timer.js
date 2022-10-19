import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysTimer = document.querySelector('.value[data-days]');
const hoursTimer = document.querySelector('.value[data-hours]');
const minutesTimer = document.querySelector('.value[data-minutes]');
const secondsTimer = document.querySelector('.value[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let timeRemaining = 0;
const inputedDate = flatpickr(inputDate, options);

startButton.addEventListener('click', () => {
  setInterval(() => {
    timeRemaining = convertMs(inputedDate.selectedDates[0].getTime() - new Date().getTime());
    if ((inputedDate.selectedDates[0].getTime() - new Date().getTime()) < 0) {
      return
    } else daysTimer.innerHTML = timeRemaining.days;
    hoursTimer.innerHTML = timeRemaining.hours;
    minutesTimer.innerHTML = timeRemaining.minutes;
    secondsTimer.innerHTML = timeRemaining.seconds;
    startButton.disabled = true;
    inputDate.disabled = true;
    function addLeadingZero() {
      if (timeRemaining.days <= 9 || timeRemaining.hours <= 9 || timeRemaining.minutes <= 9 || timeRemaining.seconds <= 9) {
        daysTimer.innerHTML = daysTimer.textContent.padStart(2, '0');
        hoursTimer.innerHTML = hoursTimer.textContent.padStart(2, '0');
        minutesTimer.innerHTML = minutesTimer.textContent.padStart(2, '0');
        secondsTimer.innerHTML = secondsTimer.textContent.padStart(2, '0');
      }
    }
    addLeadingZero();
  },1000)
})

