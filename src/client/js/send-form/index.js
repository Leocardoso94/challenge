import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';

export default () => {
  const fieldSet = document.querySelector('fieldset.user');
  showRequiredFieldErrorsOnFieldSet(fieldSet);
};
