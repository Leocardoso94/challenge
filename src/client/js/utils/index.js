const getJSON = async (uri, options) => (await fetch(uri, options)).json();

export const getFields = () => getJSON('/api/fields');

export const getDefaulAttributes = ({
  name,
  required,
  placeholder,
}) => ({
  name,
  required,
  placeholder,
  id: name,
  className: 'form__input',
});

export const fetchCEP = (cep) => {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8',
    },
  };

  return getJSON(`https://viacep.com.br/ws/${cep}/json/`, options);
};

export function mask(event) {
  const { length } = event.target.value;
  const saida = event.target.mask.substring(1, 0);
  const texto = event.target.mask.substring(length);
  if (texto.substring(0, 1) !== saida) {
    event.target.value += texto.substring(0, 1); // eslint-disable-line no-param-reassign
  }
}
