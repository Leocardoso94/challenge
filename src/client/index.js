import generateForm from './js/generate-form';
import './css/style.css';
import changeTabs from './js/change-tabs';
import sendForm from './js/send-form';
import { mask } from './js/utils';


(async () => {
  const buttonFirstStep = document.querySelector('.button.request-fields');
  buttonFirstStep.addEventListener('click', changeTabs);

  const buttonFinalize = document.querySelector('.button.user');
  buttonFinalize.addEventListener('click', sendForm);

  await generateForm();

  const cepInput = document.querySelector('[type="cep"]');
  cepInput.maxLength = 9;
  cepInput.mask = '#####-###';
  cepInput.addEventListener('keypress', mask);

  const phoneInput = document.querySelector('[type="phone"]');
  phoneInput.maxLength = 13;
  phoneInput.mask = '## #####-####';

  phoneInput.addEventListener('keypress', mask);
})();
