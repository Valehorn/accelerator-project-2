const form = document.querySelector('.form__card');
const emailInput = form.querySelector('.form__input--email');
const phoneInput = form.querySelector('.form__input--phone');
let isFormSubmitted = false;

const validateEmail = () => {
  const emailValue = emailInput.value;
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(рф|[a-zA-Z]{2,})$/i;

  if (!emailValidate.test(emailValue)) {
    emailInput.setCustomValidity('Email должен содержать латинские буквы, арабские цифры, символы: "-","+", ".". Имя должно быть разделено @. Домен должен быть отделен ".". Допускается домен кириллицей ".рф"');
    if (isFormSubmitted) {
      emailInput.classList.add('form__input--error');
    }
  } else {
    emailInput.setCustomValidity('');
    emailInput.classList.remove('form__input--error');
  }
};

const validatePhone = () => {
  const phoneValue = phoneInput.value;
  const phoneValidate = /^[\d\s-]{11,}$/;

  if (!phoneValidate.test(phoneValue)) {
    phoneInput.setCustomValidity('Телефон может принимать только арабские цифры, пробелы и символ "-", а также должен быть не менее 11 символов.');
    if (isFormSubmitted) {
      phoneInput.classList.add('form__input--error');
    }
  } else {
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove('form__input--error');
  }
};

const onInputChange = () => {
  if (isFormSubmitted) {
    validateEmail();
    validatePhone();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  isFormSubmitted = true;

  validateEmail();
  validatePhone();

  if (form.checkValidity()) {
    form.submit();
    form.reset();
    isFormSubmitted = false;
  } else {
    emailInput.reportValidity();
    phoneInput.reportValidity();
  }
};

emailInput.addEventListener('input', onInputChange);
phoneInput.addEventListener('input', onInputChange);

form.addEventListener('submit', onFormSubmit);
