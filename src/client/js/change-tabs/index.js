import { showRequiredFieldErrorsOnFieldSet } from '../show-errors';
import { hasRequiredFieldsEmptyOnFieldset } from '../validations';

const showUserFields = () => {
  document.querySelector('.button.user').style.display = 'block';
  document.querySelector('fieldset.user').style.display = 'block';
  document.querySelector('[data-step="seus_dados"]').classList.add('form__steps-item--active');
};

const hideRequestFields = () => {
  document.querySelector('fieldset.request-fields').style.display = 'none';
  document.querySelector('.button.request-fields').style.display = 'none';
  document.querySelector('[data-step="seu_pedido"]').classList.remove('form__steps-item--active');
};

const nextStep = () => {
  hideRequestFields();
  showUserFields();
};


export default () => {
  const fieldSet = document.querySelector('fieldset.request-fields');

  hasRequiredFieldsEmptyOnFieldset(fieldSet) ?
    showRequiredFieldErrorsOnFieldSet(fieldSet) :
    nextStep();
};

