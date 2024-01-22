'use client';
import Link from 'next/link'
import React, { useEffect, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { signIn, useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';

import Input from '@/app/utils/Input';
import Button from '@/app/utils/Button';
import Image from 'next/image';
import { useLoginMutation, useLoginSocialMutation } from '@/redux/features/auth/authApi';
import Protected from '@/hooks/useProtect';

type Props = {}
const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email!')
    .required('Please enter your email address'),
  password: yup.string()
    .required('Please enter your password')
    .min(6),
})

const page = (props: Props) => {
  const [login, {data, isError, isSuccess, isLoading, error}] = useLoginMutation();
  const [loginSocial, {data: dataSocial, error: errorSocial}] = useLoginSocialMutation();
  const { data: socialData } = useSession()
  const {user} = useSelector((state: any) => state?.auth);
  const formik = useFormik({
    initialValues: { email: "kandad.dev@gmail.com", password: "123456" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({email, password})
    }
  })
  const { errors, values, handleSubmit, handleChange, touched } = formik;
  console.log(socialData);
  useEffect(() => {
    if(!user && socialData){
      loginSocial({email: socialData?.user?.email, name: socialData?.user?.name, avatar: socialData?.user?.image})
    }
    if(isError){
      toast.error(error?.data, { bodyClassName: 'font-poppins' })
    }
  }, [isError, isSuccess, socialData,user])

  if(user){
    return redirect("/")
  }
  return (
    <div className='w-full h-full absolute left-0 top-0 bg-seconde dark:bg-dark flex justify-center items-center' >
      <Image src={require('../../../../public/assets/hero-img-left.svg')} alt='image hero left' className='absolute top-0 left-0'/>
      <Image src={require('../../../../public/assets/hero-img-right.svg')} alt='image hero left' className='absolute top-0 right-0'/>
      <Image src={require('../../../../public/assets/hero-back.png')} alt='image hero left' className='absolute top-0 right-0 z-10'/>
      <div className="w-full max-w-[500px] p-10 bg-seconde rounded-2xl dark:bg-dark shadow-2xl font-poppins z-20">
        <h3 className="text-dark text-[28px] font-[600] mb-3 dark:text-seconde">Login</h3>
        <p className='text-[14px] text-gray-500 mb-10'>
          Don't have an account yet?
          <Link href='/auth/sign-up' className='text-primary rounded-none'>Sign up for free</Link>
        </p>
        <form className='flex flex-col items-stretch' onSubmit={handleSubmit}>
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
              content='Login'
              onClick={() => {console.log('login action')}}
              variante='primary'
              style='rounded-md m-0 w-[50%]'
              type='submit'
            />
            <Button 
              content='Login via google'
              onClick={() => {signIn('google')}}
              variante='light'
              style='rounded-md m-0'
              type='button'
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default page