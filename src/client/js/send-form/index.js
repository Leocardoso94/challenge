import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { hasRequiredFieldsEmptyOnFieldset, validateEmail } from '../validations';

export default () => {
  const fieldSet = document.querySelector('fieldset.user');
  if (hasRequiredFieldsEmptyOnFieldset(fieldSet)) showRequiredFieldErrorsOnFieldSet(fieldSet);

  validateEmail(document.querySelector('[type="email"]'));
};
