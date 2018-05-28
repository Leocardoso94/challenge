export const isEmpty = value => typeof value === 'undefined' ||
  (Array.isArray(value) && value.length === 0) ||
  value === null ||
  value === '';

export const hasRequiredFieldsEmptyOnFieldset = (fieldSet) => {
  const requiredFields = fieldSet.querySelectorAll(':required');
  return [...requiredFields].some(field => isEmpty(field.value));
};


export const validateCpf = () => {

};


export const isValidEmail = email => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);

export const validateEmail = (input) => {
  if (isEmpty(input.value)) return false;

  return isValidEmail(input.value);
};
