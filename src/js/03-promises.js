import Notiflix from 'notiflix';

const wholeForm = document.querySelector('.form');
const firstDelay = document.querySelector('input[name=delay]');
const delayStep = document.querySelector('input[name=step]');
const functionRunAmount = document.querySelector('input[name=amount]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
};
const createAmountOfPromises = (event) => {
  event.preventDefault();
  let growingDelay = Number(firstDelay.value);
  let stepDelay = Number(delayStep.value);
  
  for (let i = 1; i <= functionRunAmount.value; i++) {
    createPromise(i, growingDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      })
    growingDelay += stepDelay;
  }
}

wholeForm.addEventListener('submit', createAmountOfPromises);
