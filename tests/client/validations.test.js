import { hasRequiredFieldsEmptyOnFieldset, isValidEmail, isEmpty } from '../../src/client/js/validations';

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
  describe('isValidEmail', () => {
    it('should return false is not a valid email', () => {
      expect(isValidEmail()).toBe(false);
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('user@gmail')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
    });
    it('should return true is a valid email', () => {
      expect(isValidEmail('user.name@gmail.com')).toBe(true);
      expect(isValidEmail('user@gmail.com')).toBe(true);
      expect(isValidEmail('user@hotmail.com')).toBe(true);
    });
  });
  describe('isEmpty', () => {
    it('should return true if value is empty', () => {
      expect(isEmpty()).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
    });
    it('should return false if value is not empty', () => {
      expect(isEmpty('a')).toBe(false);
      expect(isEmpty([1])).toBe(false);
    });
  });
});
