/**
 * @jest-environment jsdom
 */
const {
  createElementWithAttributes,
  getDefaulAttributes,
  createLabel,
  createFormField,
} = require('./../public/js/script');

describe('script.js', () => {
  const field = {
    name: 'Qual será o serviço?',
    label: 'Qual será o serviço?',
    placeholder: 'Qual será o serviço?',
    mask: 'tipo de serviço',
    type: 'enumerable',
    required: true,
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
});
