/**
 * @jest-environment jsdom
 */
const fields = require('../src/data/fields.json');

const {
  _embedded: {
    request_fields,
    user_fields,
  },
} = fields;
const {
  generateForm,
  createElementWithAttributes,
  getDefaulAttributes,
  createLabel,
  createFormField,
  createOptions,
  createFormContainerChildren,
  getCreateElementFunction,
  createTextArea,
  createSelect,
  generateFields,
} = require('./../public/js/generate-form');

describe('script.js', () => {
  const field = {
    name: 'Qual será o serviço?',
    label: 'Qual será o serviço?',
    placeholder: 'Qual será o serviço?',
    mask: 'tipo de serviço',
    type: 'enumerable',
    required: true,
    values: {
      1: '1',
      2: '2',
      3: '3',
    },
  };
  beforeEach(() => {
    document.body.innerHTML = `
    <form>
      <fieldset class="form__container request-fields"></fieldset>
      <fieldset class="form__container user"></fieldset>
    </form>`;
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve({
          json() {
            return fields;
          },
        });
      });

      return p;
    });
  });
  describe('getDefaulAttributes', () => {
    it('should return an object with name, required, placeholder, id', () => {
      const expected = {
        name: field.name,
        required: field.required,
        placeholder: field.placeholder,
        id: field.name,
        className: 'form__input',
      };
      expect(getDefaulAttributes(field)).toEqual(expected);
    });
  });
  describe('createElementWithAttributes', () => {
    it('should create a textarea with some attributes', () => {
      const textArea = createElementWithAttributes('textarea', field);

      expect(textArea).toBeInstanceOf(HTMLTextAreaElement);
      expect(textArea.id).toBe(field.name);
      expect(textArea.placeholder).toBe(field.placeholder);
      expect(textArea.required).toBe(field.required);
      expect(textArea.name).toBe(field.name);
    });
  });
  describe('createLabel', () => {
    it('should create a Label', () => {
      const label = createLabel(field.label, field.name);

      expect(label).toBeInstanceOf(HTMLLabelElement);
      expect(label.textContent).toBe(field.label);
      expect(label.htmlFor).toBe(field.name);
    });
  });
  describe('createFormField', () => {
    it('should create a div with class "form__field"', () => {
      const formField = createFormField();
      expect(formField).toBeInstanceOf(HTMLDivElement);
      expect(formField.className).toBe('form__field');
    });
  });
  describe('createOptions', () => {
    it('should create options based in the field.values', () => {
      const options = createOptions(field.values);

      options.forEach((option, index) => {
        expect(option).toBeInstanceOf(HTMLOptionElement);
        expect(option.text).toEqual(field.values[index + 1]);
        expect(option.value).toEqual(`${index}`);
      });
    });
  });
  describe('createSelect', () => {
    it('should create a select with options', () => {
      const select = createSelect(field);

      expect(select).toBeInstanceOf(HTMLSelectElement);
      expect(select.options.length).toBe(4);
      expect(select.value).toBe('');
    });
  });
  describe('getCreateElementFunction', () => {
    it('should return "createSelect" when type is enumerable', () => {
      expect(getCreateElementFunction('enumerable')).toBe(createSelect);
    });
    it('should return "createTextArea" when type is big_text', () => {
      expect(getCreateElementFunction('big_text')).toBe(createTextArea);
    });
  });
  describe('generateFields', () => {
    it('should create requestfields', () => {
      const requestFields = generateFields(request_fields);

      expect(requestFields.length).toBe(request_fields.length);
      requestFields.forEach((requestField) => {
        expect(requestField).toBeInstanceOf(HTMLDivElement);
      });
    });
  });
  describe('createFormContainerChildren', () => {
    it('should create form children and add to the dom', () => {
      createFormContainerChildren('form', user_fields);
      const form = document.querySelector('form');
      const formFields = form.querySelectorAll('.form__field');
      expect(formFields).toBeInstanceOf(NodeList);
      formFields.forEach((formField) => {
        expect(!!formField.querySelector('label')).toBe(true);
        expect(!!formField.querySelector('input')).toBe(true);
        expect(!!formField.querySelector('textarea')).toBe(false);
        expect(!!formField.querySelector('select')).toBe(false);
      });
    });
  });
  describe('generateForm', () => {
    it('should render all fields', async () => {
      await generateForm();
      expect(!!document.querySelector('textarea')).toBe(true);
      expect(!!document.querySelector('select')).toBe(true);
      expect(!!document.querySelector('option')).toBe(true);
      expect(!!document.querySelector('input')).toBe(true);
      expect(!!document.querySelector('checkboc')).toBe(false);
    });
  });
});
