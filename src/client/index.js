import generateForm from './js/generate-form';
import './css/style.css';
import changeTabs from './js/change-tabs';
import sendForm from './js/send-form';

generateForm();

const buttonFirstStep = document.querySelector('.button.request-fields');

buttonFirstStep.addEventListener('click', changeTabs);

const buttonFinalize = document.querySelector('.button.user');

buttonFinalize.addEventListener('click', sendForm);
