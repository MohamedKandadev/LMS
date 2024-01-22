'use client'
import Link from 'next/link'
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'

import Input from '@/app/utils/Input';
import Button from '@/app/utils/Button';
import Image from 'next/image';

type Props = {}
const schema = yup.object().shape({
  name: yup.string()
    .required('Please enter your full name'),
  email: yup.string()
    .email('Invalid email!')
    .required('Please enter your email address'),
  password: yup.string()
    .required('Please enter your password')
    .min(6),
})

const page = (props: Props) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      console.log({email, password})
    }
  })
  const { errors, values, handleSubmit, handleChange, touched } = formik;
  return (
    <div className='w-full h-full absolute left-0 top-0 bg-seconde dark:bg-dark flex justify-center items-center' >
      <Image src={require('../../../../public/assets/hero-img-left.svg')} alt='image hero left' className='absolute top-0 left-0'/>
      <Image src={require('../../../../public/assets/hero-img-right.svg')} alt='image hero left' className='absolute top-0 right-0'/>
      <Image src={require('../../../../public/assets/hero-back.png')} alt='image hero left' className='absolute top-0 right-0 z-10'/>
      <div className="w-full max-w-[500px] p-10 bg-seconde rounded-2xl dark:bg-dark shadow-2xl font-poppins z-20">
        <h3 className="text-dark text-[28px] font-[600] mb-3 dark:text-seconde">Sign Up</h3>
        <p className='text-[14px] text-gray-500 mb-10'>
          Already have an account yet?
          <Link href='/auth/login' className='text-primary rounded-none'>Login</Link>
        </p>
        <form className='flex flex-col items-stretch' onSubmit={handleSubmit}>
          <Input 
            type='text' 
            id='name' 
            label='Full name'
            placeHolder='Full name' 
            error={errors.name} 
            value={values.name}
            onChange={handleChange}
            touched={touched.name}
          />
          <Input 
            type='email' 
            id='email' 
            label='Username Or Email'
            placeHolder='Username Or Email' 
            error={errors.email} 
            value={values.email}
            onChange={handleChange}
            touched={touched.email}
          />
          <Input 
            type='password' 
            id='password' 
            label='Password'
            placeHolder='Password' 
            error={errors.password} 
            value={values.password}
            onChange={handleChange}
            touched={touched.password}
          />
          <div className="items-center flex justify-between gap-3">
            <Button 
              content='Sign Up'
              onClick={() => {console.log('login action')}}
              variante='primary'
              style='rounded-md m-0 w-[50%]'
              type='submit'
            />
            <Button 
              content='Login via google'
              onClick={() => {console.log('login action')}}
              variante='light'
              style='rounded-md m-0'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default page