import { isEmpty } from '../validations';
import { REQUIRED_FIELD_MESSAGE } from '../messages';

export const setTextOfError = (field, text) => {
  const errorMessage = field.nextSibling;
  errorMessage.textContent = text;
};

export const showRequiredFieldErrorsOnFieldSet = (fieldSet) => {
  const fields = fieldSet.querySelectorAll(':required');
  fields.forEach((field) => {
    const errorMessage = isEmpty(field.value) ? REQUIRED_FIELD_MESSAGE : '';
    setTextOfError(field, errorMessage);
  });
};
