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

const buttonFirstStep = document.querySelector('.button.request-fields');

buttonFirstStep.addEventListener('click', () => {
  const fieldSet = document.querySelector('fieldset.request-fields');
  const requiredFields = fieldSet.querySelectorAll(':required');
  const isFieldEmpty = [...requiredFields].some(field => field.value === '');

  if (!isFieldEmpty) nextStep();
});
