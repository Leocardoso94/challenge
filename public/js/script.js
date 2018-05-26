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
});

const createElementWithAttributes = (elementName, field) => Object.assign(
  document.createElement(elementName),
  getDefaulAttributes(field),
);

const createLabel = (text, htmlFor) => {
  const label = document.createElement('label');
  label.htmlFor = htmlFor;
  label.textContent = text;

  return label;
};

const createFormField = () => {
  const formField = document.createElement('div');
  formField.classList.add('form__field');

  return formField;
};

const getOptions = values => Object.values(values).map((value, index) => new Option(value, index));

const createSelect = (field) => {
  const select = createElementWithAttributes('select', field);
  select.options[0] = new Option(field.mask);

  getOptions(field.values).forEach((option) => {
    select.add(option);
  });

  return select;
};

const createTextArea = field => createElementWithAttributes('textarea', field);

const generateRequestFields = requestFields => requestFields.map((field) => {
  const formField = createFormField();
  formField.appendChild(createLabel(field.label, field.name));

  if (field.type === 'enumerable') formField.appendChild(createSelect(field));
  if (field.type === 'big_text') formField.appendChild(createTextArea(field));

  return formField;
});

const generateForm = async () => {
  try {
    const form = document.querySelector('.form');

    const {
      _embedded: {
        request_fields,
      },
    } = await getFields();

    generateRequestFields(request_fields).forEach((field) => {
      form.appendChild(field);
    });
  } catch (error) {
    console.error(error);
  }
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    createElementWithAttributes,
    getDefaulAttributes,
    createLabel,
    createFormField,
  };
} else {
  generateForm();
}
