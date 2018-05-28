import { isEmpty } from '../validations';

export const setTextOfError = (field, text) => {
  const errorMessage = field.nextSibling;
  errorMessage.textContent = text;
};

export const showRequiredFieldErrorsOnFieldSet = (fieldSet) => {
  const fields = [...fieldSet.querySelectorAll(':required')].filter(field => isEmpty(field.value));
  fields.forEach((field) => {
    setTextOfError(field, 'Este campo é requerido');
  });
};


export const showEmailError = () => {

};
