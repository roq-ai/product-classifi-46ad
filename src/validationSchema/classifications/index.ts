import * as yup from 'yup';

export const classificationValidationSchema = yup.object().shape({
  algorithm: yup.string().required(),
  product_id: yup.string().nullable(),
});
