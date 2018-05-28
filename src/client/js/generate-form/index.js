import { getFields } from '../utils';
import { createFormContainerChildren } from './create-elements';


export default async () => {
  try {
    const {
      _embedded: {
        request_fields,
        user_fields,
      },
    } = await getFields();
    createFormContainerChildren('.form__container.request-fields', request_fields);
    createFormContainerChildren('.form__container.user', user_fields);
  } catch (error) {
    console.error(error);
  }
};

