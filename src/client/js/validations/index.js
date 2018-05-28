import { setTextOfError } from '../show-errors';
import { EMAIL_INVALID_MESSAGE, CEP_INVALID_MESSAGE } from '../messages';
import { fetchCEP } from '../utils';

export const isEmpty = value => typeof value === 'undefined' ||
  (Array.isArray(value) && value.length === 0) ||
  value === null ||
  value === '';

export const hasRequiredFieldsEmptyOnFieldset = (fieldSet) => {
  const requiredFields = fieldSet.querySelectorAll(':required');
  return [...requiredFields].some(field => isEmpty(field.value));
};

const setTextOfErrorIfIsNotEmpty = (input, errorText) => {
  if (!isEmpty(input.value)) setTextOfError(input, errorText);
};


export const validateCEP = async (input) => {
  const cep = input.value.replace(/\.|-/g, '');
  let errorText = '';
  try {
    await fetchCEP(cep);
  } catch (error) {
    errorText = CEP_INVALID_MESSAGE;
  }

  setTextOfErrorIfIsNotEmpty(input, errorText);
};

export const isValidEmail = email => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);

export const validateEmail = (input) => {
  const errorText = !isValidEmail(input.value) ? EMAIL_INVALID_MESSAGE : '';
  setTextOfErrorIfIsNotEmpty(input, errorText);
};

