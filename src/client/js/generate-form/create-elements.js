import { getDefaulAttributes } from '../utils';

export const createElementWithAttributes = (elementName, field) => Object.assign(
  document.createElement(elementName),
  getDefaulAttributes(field),
);

export const createLabel = (text, htmlFor) => {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.classList.add('form__label');
  return label;
};

export const createFormField = () => {
  const formField = document.createElement('div');
  formField.classList.add('form__field');

  return formField;
};

export const createOptions = values => Object.values(values)
  .map(value => new Option(value, value));

export const createSelect = (field) => {
  const select = createElementWithAttributes('select', field);
  select.options[0] = new Option(field.mask, '');

  createOptions(field.values).forEach((option) => {
    select.add(option);
  });

  return select;
};

export const createTextArea = field => createElementWithAttributes('textarea', field);

export const createInput = (field) => {
  const input = createElementWithAttributes('input', field);
  input.type = field.type;

  return input;
};

export const getCreateElementFunction = (type) => {
  const fn = {
    enumerable: createSelect,
    big_text: createTextArea,
  }[type];

  return fn || createInput;
};

export const createElement = field => getCreateElementFunction(field.type)(field);

export const createErrorMessageField = () => {
  const span = document.createElement('span');
  span.className = 'error-message';
  return span;
};

export const generateFields = requestFields => requestFields.map((field) => {
  const formField = createFormField();
  formField.appendChild(createLabel(field.label, field.name));
  formField.appendChild(createElement(field));
  if (field.required) formField.appendChild(createErrorMessageField());
  return formField;
});

export const createFormContainerChildren = (className, fields) => {
  const formContainer = document.querySelector(className);
  const fragment = document.createDocumentFragment();
  generateFields(fields).forEach((field) => {
    fragment.appendChild(field);
  });
  formContainer.appendChild(fragment);
};

