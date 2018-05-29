import generateForm from './js/generate-form';
import './css/style.css';
import changeTabs from './js/change-tabs';
import sendForm from './js/send-form';
import { mask } from './js/utils';

const maskField = (selector, maxLength, maskFormat) => {
  const input = document.querySelector(selector);
  input.maxLength = maxLength;
  input.mask = maskFormat;
  input.addEventListener('keypress', mask);
};

(async () => {
  const buttonFirstStep = document.querySelector('.button.request-fields');
  buttonFirstStep.addEventListener('click', changeTabs);

  const buttonFinalize = document.querySelector('.button.user');
  buttonFinalize.addEventListener('click', sendForm);

  await generateForm();

  maskField('[type="cep"]', 9, '#####-###');
  maskField('[type="phone"]', 13, '## #####-####');
})();
