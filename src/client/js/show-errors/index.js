import { isEmpty } from '../validations';
import { REQUIRED_FIELD_MESSAGE } from '../messages';

export const setTextOfError = (field, text) => {
  const errorMessage = field.nextSibling;
  errorMessage.textContent = text;
};

export const showRequiredFieldErrorsOnFieldSet = (fieldSet) => {
  const fields = [...fieldSet.querySelectorAll(':required')].filter(field => isEmpty(field.value));
  fields.forEach((field) => {
    setTextOfError(field, REQUIRED_FIELD_MESSAGE);
  });
};


export const showEmailError = () => {

};
