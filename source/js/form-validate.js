const form = document.querySelector('.form__card');
const emailInput = form.querySelector('.form__input--email');
const phoneInput = form.querySelector('.form__input--phone');
let isValid = true;

const validateEmail = () => {
  emailInput.setCustomValidity('');
  const emailValue = emailInput.value;
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(рф|[a-zA-Z]{2,})$/i;

  if (!emailValidate.test(emailValue)) {
    emailInput.setCustomValidity('Email должен содержать латинские буквы, арабские цифры, символы: "-","+", ".". Имя должно быть разделено @. Домен должен быть отделен ".". Допускается домен кириллицей ".рф"');
    emailInput.reportValidity();
    emailInput.classList.add('form__input--error');
    isValid = false;
  } else {
    emailInput.classList.remove('form__input--error');
  }
};

const validatePhone = () => {
  phoneInput.setCustomValidity('');
  const phoneValue = phoneInput.value;
  const phoneValidate = /^(?:\d[-\d]*){11}$/;
  if (!phoneValidate.test(phoneValue)) {
    phoneInput.setCustomValidity('Телефон может принимать только арабские цифры, пробелы и символ "-", а так же должен быть не менее 11 символов.');
    phoneInput.reportValidity();
    phoneInput.classList.add('form__input--error');
    isValid = false;
  } else {
    phoneInput.classList.remove('form__input--error');
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  isValid = true;
  validateEmail();
  validatePhone();

  if (isValid) {
    form.submit();
    form.reset();
  }
};

form.addEventListener('submit', onFormSubmit);
