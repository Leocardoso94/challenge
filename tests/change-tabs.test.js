/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
 <form class="form">
 <fieldset class="form__container request-fields" style="display:block;">
  <input value="" required>
 </fieldset>
 <fieldset class="form__container user" style="display:none;">
 </fieldset>
 <fieldset class="form__container actions">
     <button type="button" class="button request-fields" data-next-step="" style="display:block;">Buscar profissionais</button>
     <button type="button" class="button user" style="display:none;">Finalizar</button>
 </fieldset>
 <ol class="form__steps">
     <li class="form__steps-item form__steps-item--active" data-step="seu_pedido">1. Seu pedido</li>
     <li class="form__steps-item" data-step="seus_dados">2. Seus dados</li>
 </ol>
</form>
 `;

require('../public/js/change-tabs');

describe('change-tabs', () => {
  it('should not change tab when a required input is empty', () => {
    document.querySelector('button.request-fields').click();
    expect(document.querySelector('fieldset.request-fields').style.display).toBe('block');
    expect(document.querySelector('.button.request-fields').style.display).toBe('block');
    expect(document.querySelector('.button.user').style.display).toBe('none');
    expect(document.querySelector('fieldset.user').style.display).toBe('none');
    expect(document.querySelector('[data-step="seu_pedido"]').classList.contains('form__steps-item--active')).toBe(true);
    expect(document.querySelector('[data-step="seus_dados"]').classList.contains('form__steps-item--active')).toBe(false);
  });
  it('should change the tab when the button is clicked', () => {
    document.querySelector('input').value = '1';
    document.querySelector('button.request-fields').click();
    expect(document.querySelector('fieldset.request-fields').style.display).toBe('none');
    expect(document.querySelector('.button.request-fields').style.display).toBe('none');
    expect(document.querySelector('.button.user').style.display).toBe('block');
    expect(document.querySelector('fieldset.user').style.display).toBe('block');
    expect(document.querySelector('[data-step="seu_pedido"]').classList.contains('form__steps-item--active')).toBe(false);
    expect(document.querySelector('[data-step="seus_dados"]').classList.contains('form__steps-item--active')).toBe(true);
  });
});
