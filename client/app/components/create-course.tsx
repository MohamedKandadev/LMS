'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import Input from '../utils/Input'
import Button from '../utils/Button'
import ProfileContent from '@/app/components/ProfileContent';
import Image from 'next/image';
import { useCreateCourseMutation } from '@/redux/features/course/courseApi';

const schema = yup.object().shape({
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
  thumbnail:  yup.string().required('Please enter demo video url'),
})

type Props = {
  showPage: any,
  setShowPage: any;
  formik: any;
}

const CreateCourse = ({ setShowPage, formik }: Props) => {
  const [createCourse, { data, isLoading, isSuccess, isError, error  }] = useCreateCourseMutation();
  const [dragging, setDragging] = useState(false)
  
  useEffect(() => {
    if(isError){
      toast.error(error?.data, { bodyClassName: 'font-poppins' })
    }
    if(isSuccess){
      toast.success(data, { bodyClassName: 'font-poppins' })
    }
  }, [isError, isSuccess])

  const { errors, values, handleSubmit, handleChange, touched } = formik;
  console.log(formik)
  const handelFileChange = (e: any) => {
    let file = e.target.files[0]; 
    let fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload = function() {
      if(fileReader.readyState === 2){
        formik.setFieldValue('thumbnail', fileReader.result);
      }
    }; 
  }
  const handelDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
    console.log(dragging)
  }
  const handelDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
    console.log(dragging)
  }
  const handelDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if(file){
      let fileReader = new FileReader(); 
      fileReader.readAsDataURL(file); 
      fileReader.onload = function() {
        if(fileReader.readyState === 2){
          formik.setFieldValue('thumbnail', fileReader.result);
        }
      };
    }
  }
  return (
    <div className='mb-5'>
      <h2 className='font-poppins font-[500] text-dark dark:text-white text-[18px] px-[40px] pb-4 pt-2 w-full border-b-[1px]'>Basic Information</h2>
      <form className='flex flex-col items-stretch w-full px-[40px] py-5' onSubmit={handleSubmit}>
          <Input 
            type='text' 
            id='name' 
            label='Course name'
            placeHolder='Learn Figma - UI/UX Desing Essential Training' 
            error={errors.name} 
            value={values.name}
            onChange={handleChange}
            touched={touched.name}
          />
          <Input
            type='text' 
            id='description' 
            label='Description'
            placeHolder='Description' 
            error={errors.description} 
            value={values.description}
            onChange={handleChange}
            touched={touched.description}
            as='textarea'
          />
          <div className="flex gap-4 max-sm:flex-col">
            <Input
              type='number' 
              id='price' 
              label='Price'
              placeHolder='20' 
              error={errors.price} 
              value={values.price}
              onChange={handleChange}
              touched={touched.price}
            />
            <Input
              type='number' 
              id='estimatedPrice' 
              label='Estimated price'
              placeHolder='80' 
              error={errors.estimatedPrice} 
              value={values.estimatedPrice}
              onChange={handleChange}
              touched={touched.estimatedPrice}
            />
          </div>
          <div className="flex gap-4 columns-1">
            <Input 
              type='text' 
              id='tags' 
              label='Course tags'
              placeHolder='UI, UX, FIGMA, DESING' 
              error={errors.tags} 
              value={values.tags}
              onChange={handleChange}
              touched={touched.tags}
            />
          </div>
          <div className="flex gap-4 max-sm:flex-col">
            <Input
              type='text' 
              id='level' 
              label='Course Level'
              placeHolder='Advanced' 
              error={errors.level} 
              value={values.level}
              onChange={handleChange}
              touched={touched.level}
            />
            <Input 
              type='text' 
              id='demoUrl' 
              label='Demo url'
              placeHolder='https://demourl.com' 
              error={errors.demoUrl} 
              value={values.demoUrl}
              onChange={handleChange}
              touched={touched.demoUrl}
            />
          </div>
          <div className="flex gap-4">
            <input
              type='file' 
              id='thumbnail'
              className='hidden'
              onChange={handelFileChange}
            />
            <label htmlFor='thumbnail' className={`dark:border-gray-400  w-full dark:text-primary-gray text-[14px] border-2 rounded-md outline-0 min-h-[140px] flex justify-center items-center p-5 ${dragging ? 'bg-seconde-gray' : 'bg-transparent'}`}
            onDragOver={handelDragOver}
            onDragLeave={handelDragLeave}
            onDrop={handelDrop}
            >
              {
                values.thumbnail ? <Image 
                  src={values.thumbnail} 
                  alt='Video thumbnail' 
                  width={'100'}
                  height={'100'}
                  className='w-full'
                /> : <span>Drog and Drop your thumbnail here</span>
              }
            </label>
          </div>
          <div className="w-full flex justify-end gap-3 mt-5">
            <div className="w-full max-w-[130px]">
              <Button 
                content='Next'
                variante='primary'
                style='rounded-md w-full py-8 text-[15px]'
                type='submit'
              />
            </div>
          </div>
        </form>
        
      <ToastContainer />
    </div>
  )
}

export default CreateCourse;