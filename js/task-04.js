const counterValue = document.querySelector('#value');

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);
