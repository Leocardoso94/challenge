export const getFields = async () => (await fetch('/api/fields')).json();

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
