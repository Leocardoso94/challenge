const rewire = require('rewire');

const script = rewire('../public/js/script.js');
const getDefaulAttributes = script.__get__('getDefaulAttributes');
const createElementWithAttributes = script.__get__('createElementWithAttributes');


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
    it('should create a HTMLElement with some attributes', () => {
      createElementWithAttributes('textarea', field);
    });
  });
});
