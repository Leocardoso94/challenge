import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { hasRequiredFieldsEmptyOnFieldset, validateEmail, validateCEP } from '../validations';

export default () => {
  const fieldSet = document.querySelector('fieldset.user');
  if (hasRequiredFieldsEmptyOnFieldset(fieldSet)) showRequiredFieldErrorsOnFieldSet(fieldSet);

  validateEmail(document.querySelector('[type="email"]'));
  validateCEP(document.querySelector('[type="cep"]'));
};
