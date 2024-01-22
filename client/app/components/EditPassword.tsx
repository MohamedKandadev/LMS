import React, { useEffect } from 'react'
import { TabPanel } from '@mui/joy'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ref } from 'yup'
import { ToastContainer, toast } from 'react-toastify';

import Input from '../utils/Input'
import Button from '../utils/Button'
import { useUpdatePasswordMutation } from '@/redux/features/user/userApi';

const schema = yup.object().shape({
  currentPassword: yup.string()
    .required('Please enter your current password'),
  newPassword: yup.string()
    .required('Please enter your new password'),
  confirmNewPassword: yup.string()
    .required('Please confirm your new password')
    .oneOf([ref("newPassword")], "Passwords does not match"),
})

type Props = {
  value: number
}

const EditPassword = ({ value }: Props) => {
  const [updatePassword, {data, isSuccess, isLoading, isError, error}] = useUpdatePasswordMutation();
  const formik = useFormik({
    initialValues: { currentPassword: '', newPassword: '', confirmNewPassword: '' },
    validationSchema: schema,
    onSubmit: async ({ currentPassword, newPassword}) => {
      await updatePassword({ currentPassword, newPassword})
    }
  })
  const { errors, values, handleSubmit, handleChange, touched } = formik;
  useEffect(() => {
    if(isError){
      toast.error(error?.data, { bodyClassName: 'font-poppins' })
    }
    if(isSuccess){
      toast.success(data, { bodyClassName: 'font-poppins' })
    }
  }, [isError, isSuccess])
  return (
    <TabPanel value={value} sx={{paddingX: '50px',}}>
      <div className="flex flex-col gap-10 py-10 w-full">
        <form className='flex flex-col items-stretch w-full max-w-[400px]' onSubmit={handleSubmit}>
          <Input 
            type='password' 
            id='currentPassword' 
            label='Current password'
            placeHolder='Current password' 
            error={errors.currentPassword} 
            value={values.currentPassword}
            onChange={handleChange}
            touched={touched.currentPassword}
          />
          <Input 
            type='password' 
            id='newPassword' 
            label='New password'
            placeHolder='New password' 
            error={errors.newPassword} 
            value={values.newPassword}
            onChange={handleChange}
            touched={touched.newPassword}
          />
          <Input 
            type='password' 
            id='confirmNewPassword' 
            label='Confirm new password'
            placeHolder='Confirm new password' 
            error={errors.confirmNewPassword} 
            value={values.confirmNewPassword}
            onChange={handleChange}
            touched={touched.confirmNewPassword}
          />
          <div className="items-center flex justify-between gap-3">
            <Button 
              content='Save Password'
              variante='primary'
              style='rounded-md m-0 w-[50%]'
              type='submit'
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </TabPanel> 
  )
}

export default EditPassword