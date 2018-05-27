const getFields = async () => (await fetch('/api/fields')).json();

const getDefaulAttributes = ({
  name,
  required,
  placeholder,
}) => ({
  name,
  required,
  placeholder,
  id: name,
  className: 'form__input',
});

const createElementWithAttributes = (elementName, field) => Object.assign(
  document.createElement(elementName),
  getDefaulAttributes(field),
);

const createLabel = (text, htmlFor) => {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.classList.add('form__label');
  return label;
};

const createFormField = () => {
  const formField = document.createElement('div');
  formField.classList.add('form__field');

  return formField;
};

const createOptions = values => Object.values(values)
  .map((value, index) => new Option(value, index));

const createSelect = (field) => {
  const select = createElementWithAttributes('select', field);
  select.options[0] = new Option(field.mask, '');

  createOptions(field.values).forEach((option) => {
    select.add(option);
  });

  return select;
};

const createTextArea = field => createElementWithAttributes('textarea', field);

const createInput = (field) => {
  const input = createElementWithAttributes('input', field);
  input.type = field.type;

  return input;
};

const getCreateElementFunction = (type) => {
  const fn = {
    enumerable: createSelect,
    big_text: createTextArea,
  }[type];

  return fn || createInput;
};

const createElement = field => getCreateElementFunction(field.type)(field);

const createErrorMessageField = () => {
  const span = document.createElement('span');
  span.className = 'error-message';
  span.textContent = 'Este campo é requerido';
  return span;
};

const generateFields = requestFields => requestFields.map((field) => {
  const formField = createFormField();
  formField.appendChild(createLabel(field.label, field.name));
  formField.appendChild(createElement(field));
  if (field.required) formField.appendChild(createErrorMessageField());
  return formField;
});

const createFormContainerChildren = (className, fields) => {
  const formContainer = document.querySelector(className);
  const fragment = document.createDocumentFragment();
  generateFields(fields).forEach((field) => {
    fragment.appendChild(field);
  });
  formContainer.appendChild(fragment);
};

const generateForm = async () => {
  try {
    const {
      _embedded: {
        request_fields,
        user_fields,
      },
    } = await getFields();
    createFormContainerChildren('.form__container.request-fields', request_fields);
    createFormContainerChildren('.form__container.user', user_fields);
  } catch (error) {
    console.error(error);
  }
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    createFormContainerChildren,
    createElementWithAttributes,
    getDefaulAttributes,
    createLabel,
    createErrorMessageField,
    createFormField,
    createOptions,
    getCreateElementFunction,
    createTextArea,
    createSelect,
    generateFields,
    generateForm,
  };
} else {
  generateForm();
}

