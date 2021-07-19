const input = document.querySelector('#validation-input');
const validation = input.getAttribute('data-length');

input.addEventListener('blur', checksValidation);

function checksValidation() {
  if (input.value.length !== Number(validation)) {
    input.classList.remove('valid');
    return input.classList.add('invalid');
  }
  input.classList.remove('invalid');
  return input.classList.add('valid');
}
