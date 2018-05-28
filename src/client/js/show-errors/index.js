import { isEmpty } from '../validations';

export const showRequiredFieldErrorsOnFieldSet = (fieldSet) => {
  const fields = [...fieldSet.querySelectorAll(':required')].filter(field => isEmpty(field.value));
  fields.forEach((field) => {
    const errorMessage = field.nextSibling;
    errorMessage.textContent = 'Este campo é requerido';
  });
};


export const showCpfError = () => {

};
