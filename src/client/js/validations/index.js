export const hasRequiredFieldsEmptyOnFieldset = (fieldSet) => {
  const requiredFields = fieldSet.querySelectorAll(':required');
  return [...requiredFields].some(field => field.value === '');
};


export const validateCpf = () => {

};
