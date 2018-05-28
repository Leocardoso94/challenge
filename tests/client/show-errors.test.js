import { showRequiredFieldErrorsOnFieldSet } from '../../src/client/js/show-errors';
import { REQUIRED_FIELD_MESSAGE } from '../../src/client/js/messages';


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

      expect(document.querySelector('input').nextSibling.textContent).toBe(REQUIRED_FIELD_MESSAGE);
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
