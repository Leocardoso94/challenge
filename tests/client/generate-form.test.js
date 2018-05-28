/**
 * @jest-environment jsdom
 */
import fields from '../../src/server/data/fields.json';
import generateForm from './../../src/client/js/generate-form';

describe('generate-form', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <form>
      <fieldset class="form__container request-fields"></fieldset>
      <fieldset class="form__container user"></fieldset>
    </form>`;
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        json() {
          return fields;
        },
      });
    }));
  });

  describe('generateForm', () => {
    it('should render all fields', async () => {
      await generateForm();
      expect(!!document.querySelector('textarea')).toBe(true);
      expect(!!document.querySelector('select')).toBe(true);
      expect(!!document.querySelector('option')).toBe(true);
      expect(!!document.querySelector('input')).toBe(true);
      expect(!!document.querySelector('checkbox')).toBe(false);
    });
  });
});
