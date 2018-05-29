import { getDataFromForm, areAllErrorsEmpty } from '../../src/client/js/send-form';


describe('sendForm', () => {
  describe('getDataFromForm', () => {
    it('should return an object with form values', () => {
      document.body.innerHTML = `
      <form>
        <input name="username" value="teste"/>
        <input name="password" value="foo"/>
      </form>
      `;
      const { username, password } = getDataFromForm();
      expect(username).toBe('teste');
      expect(password).toBe('foo');
    });
    it('should return an Null property is value is empty', () => {
      document.body.innerHTML = `
      <form>
        <input name="username" value="teste"/>
        <input name="password" />
      </form>
      `;
      const { username, password } = getDataFromForm();
      expect(username).toBe('teste');
      expect(password).toBe(null);
    });
  });
  describe('areAllErrorsEmpty', () => {
    it('should return true if all errors are empty', () => {
      document.body.innerHTML = `
        <span class="error-message'"></span>
        <span class="error-message'"></span>
        <span class="error-message'"></span>`;
      expect(areAllErrorsEmpty()).toBe(true);
    });
    it('should return false if one error is not empty', () => {
      document.body.innerHTML = `
        <span class="error-message"></span>
        <span class="error-message">ERRO</span>
        <span class="error-message"></span>`;
      expect(areAllErrorsEmpty()).toBe(false);
    });
  });
});
