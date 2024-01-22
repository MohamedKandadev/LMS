import React from 'react'

import Input from '../utils/Input'
import Button from '../utils/Button';
import { MdAdd   } from 'react-icons/md';

type Props = {
  showPage: any,
  setShowPage: any;
  formik: any;
}

const CourseOptions = ({ formik, showPage, setShowPage }: Props) => {
  
  const { errors, values, handleSubmit, handleChange, touched } = formik;
  const handelBenefitsChange = (index: number, value: any) => {
    const upDateBenefits = [...values.benefits]
    upDateBenefits[index].title = value
    formik.setFieldValue('benefits', [...upDateBenefits]);
  }
  const handelAddBenefit = () => {
    if(values.benefits[values.benefits.length - 1]?.title !== '')
      formik.setFieldValue('benefits', [...values.benefits, {title: ''}]);
  }

  const handelPrerequisitesChange = (index: number, value: any) => {
    const upDatePrerequisites = [...values.prerequisites]
    upDatePrerequisites[index].title = value
    formik.setFieldValue('prerequisites', [...upDatePrerequisites]);
  }
  const handelAddPrerequisites = () => {
    if(values.prerequisites[values.prerequisites.length - 1]?.title !== '')
      formik.setFieldValue('prerequisites', [...values.prerequisites, {title: ''}]);
    
  }
  
  return (
    <div className='mb-5'>
      <h2 className='font-poppins font-[500] text-dark dark:text-white text-[18px] px-[40px] pb-4 pt-2 w-full border-b-[1px]'>
        Course Options
      </h2>

      <form className='flex flex-col items-stretch w-full px-[40px] py-5'>
        <label className={`text-dark mb-1 text-[15px] dark:text-seconde `}> 
          What are the benefits for students in this course?
        </label>
        <div className="flex flex-wrap gap-3 1000px:justify-between">
          {
            values.benefits.map((benefit: any, index: number) => <input key={index}
                type='text' 
                // id={'name'} 
                placeholder='Ypu will learn how to build complet web site weith next js and nodejs' 
                value={benefit.title}
                onChange={(e) => handelBenefitsChange(index, e.target.value)}
                // touched={touched.name}
                className={`dark:border-gray-400 bg-transparent w-full  1000px:w-[49%] dark:text-primary-gray text-[14px] border-2 py-4 px-5 rounded-md outline-0 `}
              />
            )
          }
        </div>
      </form>
      <div className="flex max-w-fit px-[40px]">
        <Button 
          content='Add Benefits'
          onClick={handelAddBenefit}
          variante='light'
          style='rounded-md max-w-fit text-[15px] px-3'
        />
      </div>

      <form className='flex flex-col items-stretch w-full px-[40px] py-5'>
        <label className={`text-dark mb-1 text-[15px] dark:text-seconde `}> 
          What are the prerequisites for strating in this course?
        </label>
        <div className="flex flex-wrap gap-3 1000px:justify-between mb-3">
          {
            values.prerequisites.map((prerequisites: any, index: number) => <input key={index}
                type='text' 
                // id={'name'} 
                placeholder='Ypu will learn how to build complet web site weith next js and nodejs' 
                value={prerequisites.title}
                onChange={(e) => handelPrerequisitesChange(index, e.target.value)}
                // touched={touched.name}
                className={`dark:border-gray-400 bg-transparent w-full  1000px:w-[49%] dark:text-primary-gray text-[14px] border-2 py-4 px-5 rounded-md outline-0 `}
              />
            )
          }
        </div>
      </form>
      <div className="flex max-w-fit px-[40px]">
        <Button 
          content='Add Prerequisites'
          onClick={handelAddPrerequisites}
          variante='light'
          style='rounded-md max-w-fit text-[15px] px-3'
        />
      </div>

      <div className="w-full flex justify-between gap-3 mt-5 px-[40px]">
        <div className="w-full max-w-[130px]">
          <Button 
            content='Prev'
            variante='primary'
            style='rounded-md w-full py-8 text-[15px]'
            type='button'
            onClick={() => setShowPage(1)}
          />
        </div>
        <div className="w-full max-w-[130px]">
          <Button 
            content='Next'
            variante='primary'
            style='rounded-md w-full py-8 text-[15px]'
            type='button'
            onClick={() => setShowPage(3)}
          />
        </div>
      </div>
    </div>
  )
}

export default CourseOptions