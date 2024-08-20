const form = document.querySelector('.form__card');
const emailInput = form.querySelector('.form__input--email');
const phoneInput = form.querySelector('.form__input--phone');
let isValid = true;

const validateEmail = () => {
  const emailValue = emailInput.value;
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(рф|[a-zA-Z]{2,})$/;

  if (!emailValidate.test(emailValue)) {
    emailInput.classList.add('form__input--error');
    isValid = false;
  } else {
    emailInput.classList.remove('form__input--error');
  }
};

const validatePhone = () => {
  const phoneValue = phoneInput.value;
  const phoneValidate = /^(?:\d[-\d]*){11}$/;
  if (!phoneValidate.test(phoneValue)) {
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
