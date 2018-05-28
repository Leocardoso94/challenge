import { hasRequiredFieldsEmptyOnFieldset, isValidEmail, isEmpty, validateEmail, validateCEP } from '../../src/client/js/validations';
import { EMAIL_INVALID_MESSAGE, CEP_INVALID_MESSAGE } from '../../src/client/js/messages';

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
  describe('validateEmail', () => {
    it('should show the email invalid message', () => {
      document.body.innerHTML = '<input value="aaa"><span/>';
      validateEmail(document.querySelector('input'));
      expect(document.body.innerHTML).toContain(EMAIL_INVALID_MESSAGE);
    });
    it('should remove the email invalid message', () => {
      document.body.innerHTML = '<input value="aaa"><span/>';
      const input = document.querySelector('input');
      validateEmail(input);
      input.value = 'teste@teste.com';
      validateEmail(input);
      expect(document.querySelector('span').textContent.trim()).toBe('');
    });
    it('should not show the email invalid message if value is empty', () => {
      document.body.innerHTML = '<input value=""><span/>';
      validateEmail(document.querySelector('input'));
      expect(document.querySelector('span').textContent.trim()).toBe('');
    });
  });
  describe('validateCEP', () => {
    it('should show the cep invalid message', async () => {
      document.body.innerHTML = '<input value="aaa"><span/>';
      await validateCEP(document.querySelector('input'));
      expect(document.body.innerHTML).toContain(CEP_INVALID_MESSAGE);
    });
    it('should remove the cep invalid message', async () => {
      document.body.innerHTML = '<input value="aaa"><span/>';
      const input = document.querySelector('input');
      await validateCEP(input);
      global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
        resolve({
          json() {
            return true;
          },
        });
      }));
      input.value = '04320-040';
      await validateCEP(input);
      expect(document.querySelector('span').textContent.trim()).toBe('');
    });
    it('should not show the cep invalid message if value is empty', async () => {
      document.body.innerHTML = '<input value=""><span/>';
      await validateCEP(document.querySelector('input'));
      expect(document.querySelector('span').textContent.trim()).toBe('');
    });
    it('should show the cep invalid message if is a invalid cep', async () => {
      document.body.innerHTML = '<input value="aaa"><span/>';
      const input = document.querySelector('input');
      global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
        resolve({
          json() {
            return { erro: true };
          },
        });
      }));
      await validateCEP(input);
      expect(document.querySelector('span').textContent).toBe(CEP_INVALID_MESSAGE);
    });
  });
});
