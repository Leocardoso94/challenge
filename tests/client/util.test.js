import { getDefaulAttributes, mask } from '../../src/client/js/utils';

describe('util', () => {
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
        className: 'form__input',
      };
      expect(getDefaulAttributes(field)).toEqual(expected);
    });
  });
  describe('mask', () => {
    it('should add a mask to the target', () => {
      const event = {
        target: {
          value: '',
          mask: '#####-##',
        },
      };
      // simulando input do usuário
      '1111111'.split('').forEach((number) => {
        event.target.value += number;
        mask(event);
      });

      expect(event.target.value).toBe('11111-11');
    });
  });
});
