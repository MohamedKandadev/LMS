import { useFormik } from 'formik';
import * as yup from 'yup';

export const schemaCreateCourse = yup.object().shape({
  name: yup.string()
    .required('Please enter course name'),
  description: yup.string()
    .required('Please enter course discription'),
  price: yup.number()
    .required('Please enter course price'),
  estimatedPrice: yup.number(),
  tags: yup.string()
    .required('Please enter course tags'),
  level: yup.string()
    .required('Please enter course level'),
  demoUrl: yup.string()
    .required('Please enter demo video url'),
})

export const schemaCourseData = yup.array().of(
  yup.object().shape({
    videoUrl: yup.string()
    .required('Please enter url of video'),
    title: yup.string()
    .required('Please enter title'),
    description: yup.string()
    .required('Please enter description'),
    suggestion: yup.string()
    .required('Please enter suggestion'),
  })
)