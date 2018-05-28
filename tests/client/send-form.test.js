import { getDataFromForm } from '../../src/client/js/send-form';


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
  });
});
