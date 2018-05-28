import { showRequiredFieldErrorsOnFieldSet } from '../../src/client/js/show-errors';


describe('show-errors', () => {
  describe('showRequiredFieldErrorsOnFieldSet', () => {
    it('should show error message in the dom if has required fields empty', () => {
      document.body.innerHTML = `
      <fieldset>
        <input value="" required>
        <input value="aaaa" required>
      </fieldset>
      `;
      const fieldSet = document.querySelector('fieldset');
      showRequiredFieldErrorsOnFieldSet(fieldSet);

      expect(document.querySelector('input').nextSibling.textContent).toBe('Este campo é requerido');
    });
    it('should not show error message in the dom if not have required fields empty', () => {
      document.body.innerHTML = `
      <fieldset>
        <input value="aaa" required>
        <input value="aaaa" required>
      </fieldset>
      `;
      const fieldSet = document.querySelector('fieldset');
      showRequiredFieldErrorsOnFieldSet(fieldSet);

      expect(document.querySelector('input').nextSibling.textContent.trim()).toBe('');
    });
  });
});
