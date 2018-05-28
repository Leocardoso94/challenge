import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { validateEmail, validateCEP, validatePhoneNumber } from '../validations';

export default () => {
  const fieldSet = document.querySelector('fieldset.user');
  showRequiredFieldErrorsOnFieldSet(fieldSet);

  validateEmail(document.querySelector('[type="email"]'));
  validateCEP(document.querySelector('[type="cep"]'));
  validatePhoneNumber(document.querySelector('[type="phone"]'));
};
