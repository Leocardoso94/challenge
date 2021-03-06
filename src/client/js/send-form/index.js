import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { validateEmail, validateCEP, validatePhoneNumber, isEmpty } from '../validations';

export const areAllErrorsEmpty = () => [...document.querySelectorAll('.error-message')].every(span => isEmpty(span.textContent.trim()));

export const getDataFromForm = () => [...document.querySelectorAll('form [name]')]
  .reduce((obj, element) => {
    obj[element.name] = isEmpty(element.value) ? null : element.value; // eslint-disable-line 
    return obj;
  }, {});

const sendData = () => {
  alert('Seus dados foram enviados, olhe no console 🐱‍👤');
  console.log(getDataFromForm());
};

export default async () => {
  const fieldSet = document.querySelector('fieldset.user');
  showRequiredFieldErrorsOnFieldSet(fieldSet);

  validateEmail(document.querySelector('[type="email"]'));
  await validateCEP(document.querySelector('[type="cep"]'));
  validatePhoneNumber(document.querySelector('[type="phone"]'));

  if (areAllErrorsEmpty()) sendData();
};
