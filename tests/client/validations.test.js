import { hasRequiredFieldsEmptyOnFieldset } from '../../src/client/js/validations';

describe('validations', () => {
  describe('hasRequiredFieldsEmptyOnFieldset', () => {
    it('should return true if has empty required fields', () => {
      document.body.innerHTML = `
      <fieldset>
        <input value="" required>
        <input value="aaaa" required>
      </fieldset>
      `;
      const fieldSet = document.querySelector('fieldset');
      expect(hasRequiredFieldsEmptyOnFieldset(fieldSet)).toBe(true);
    });
    it('should return false if has no empty required fields', () => {
      document.body.innerHTML = `
      <fieldset>
        <input value="aa" required>
        <input value="aaaa" required>
      </fieldset>
      `;
      const fieldSet = document.querySelector('fieldset');
      expect(hasRequiredFieldsEmptyOnFieldset(fieldSet)).toBe(false);
    });
    it('should return false if has no required fields', () => {
      document.body.innerHTML = `
      <fieldset>
        <input value="aa" >
        <input >
      </fieldset>
      `;
      const fieldSet = document.querySelector('fieldset');
      expect(hasRequiredFieldsEmptyOnFieldset(fieldSet)).toBe(false);
    });
  });
});
