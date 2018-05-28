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
