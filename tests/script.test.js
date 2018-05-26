/**
 * @jest-environment jsdom
 */
const { createElementWithAttributes, getDefaulAttributes } = require('./../public/js/script');

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
});
