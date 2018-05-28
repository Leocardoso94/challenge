import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { hasRequiredFieldsEmptyOnFieldset } from '../validations';

export default () => {
  const fieldSet = document.querySelector('fieldset.user');
  if (hasRequiredFieldsEmptyOnFieldset(fieldSet)) showRequiredFieldErrorsOnFieldSet(fieldSet);
};
