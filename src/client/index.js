import generateForm from './js/generate-form';
import './css/style.css';
import changeTabs from './js/change-tabs';

generateForm();

const buttonFirstStep = document.querySelector('.button.request-fields');

buttonFirstStep.addEventListener('click', changeTabs);
