const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const inputChange = () => {
  if (input.value.length === 0) {
    return (output.textContent = 'незнакомец');
  }
  return (output.textContent = input.value);
};

input.addEventListener('input', inputChange);
