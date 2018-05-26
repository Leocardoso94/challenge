/**
 * @jest-environment jsdom
 */
const {
  _embedded: {
    request_fields,
  },
} = require('../src/data/fields.json');
const {
  createElementWithAttributes,
  getDefaulAttributes,
  createLabel,
  createFormField,
  createOptions,
  getCreateElementFunction,
  createTextArea,
  createSelect,
  generateRequestFields,
} = require('./../public/js/script');

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
  describe('getDefaulAttributes', () => {
    it('should return an object with name, required, placeholder, id', () => {
      const expected = {
        name: field.name,
        required: field.required,
        placeholder: field.placeholder,
        id: field.name,
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
      expect(select.value).toBe(field.mask);
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
  describe('generateRequestFields', () => {
    it('should create requestfields', () => {
      const requestFields = generateRequestFields(request_fields);

      expect(requestFields.length).toBe(request_fields.length);
      requestFields.forEach((requestField) => {
        expect(requestField).toBeInstanceOf(HTMLDivElement);
      });
    });
  });
});
