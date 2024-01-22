'use client'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IoIosArrowDown } from "react-icons/io";
import { VscSaveAs } from "react-icons/vsc";
import { GoPencil } from "react-icons/go";

import Input from '../utils/Input'
import Button from '../utils/Button'
import Image from 'next/image';

type Props = {
  showPage: any,
  setShowPage: any;
  formik: any;
  isLoading: boolean;
}

const CourseData = ({ setShowPage, showPage, formik, isLoading }: Props) => {
  const [dragging, setDragging] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState(-1);
  const [collapseEditName, setCollapseEditName] = useState(-1);
  const { errors, values, handleSubmit, handleChange, touched } = formik;
  console.log(errors)
  
  const handleChangeContent = (index: number, value: any) => {
    let upDateContent = values;
    upDateContent[index] = {...upDateContent[index], ...value};
    formik.setFieldValue(upDateContent);
  }
  
  const handelFileChange = (e: any, index: number) => {
    let file = e.target.files[0]; 
    let fileReader = new FileReader(); 
    fileReader.readAsDataURL(file); 
    fileReader.onload = function() {
      if(fileReader.readyState === 2){
        handleChangeContent(index, { videoThumb: fileReader.result })
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
  const handelDrop = (e: any, index: number) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if(file){
      let fileReader = new FileReader(); 
      fileReader.readAsDataURL(file); 
      fileReader.onload = function() {
        if(fileReader.readyState === 2){
          handleChangeContent(index, { videoThumb: fileReader.result })
        }
      };
    }
  }
  const handelLinkChange = (index: number, i: number, value: object) => {
    console.log(values)
    let upDateLinks = values[index].links;
    upDateLinks[i]  = { ...upDateLinks[i], ...value }
    handleChangeContent(index, {links: upDateLinks});
  }
  const handelAddLink = (index: number) => {
    let upDateLinks = values[index].links;
    if(upDateLinks[upDateLinks.length - 1]?.title !== '' && upDateLinks[upDateLinks.length - 1]?.url !== ''){
      upDateLinks.push({title: '', url: ''})
      handleChangeContent(index, {links: upDateLinks});
    }
  }
  const handelAddNewContent = () => {
    let upDateContent = values;
    console.log(errors)
    if(Object.keys(errors).length === 0){
      upDateContent.push({
        description: '',
        videoUrl: '',
        videoThumb: '',
        title: '',
        links: [{title: '', url: ''}],
        suggestion: '',
      })
      formik.setFieldValue(upDateContent);
    }
  }
  
  return (
    <div className='mb-5'>
      <h2 className='font-poppins font-[500] text-dark dark:text-white text-[18px] px-[40px] pb-4 pt-2 w-full border-b-[1px]'>
        Course Content
      </h2>
      
      <form className={`flex flex-col items-stretch w-full px-[40px] py-5 h-fit gap-2`} onSubmit={handleSubmit} id='courseContent'>
        {
          values.map((
            {title, description, videoUrl, suggestion, videoThumb, links}: 
            {title: any, description: any, videoUrl: any, suggestion: any, videoThumb: any, links:any}, index: number
          ) => {
            return <div className="w-full dark:border-primary-dark border-[1px] rounded-2xl overflow-hidden" key={index}>
              <div className="flex cursor-pointer justify-between items-center bg-seconde-gray dark:bg-primary-dark dark:text-primary-gray text-[14px]   rounded-2xl px-5 outline-0">
                {
                  collapseEditName === index ? <>
                    <input 
                      type='text' 
                      id='title'
                      placeholder='Learn Figma - UI/UX Desing Essential Training' 
                      value={title}
                      onChange={(e) => handleChangeContent(index,  {title: e.target.value})}
                      className={`py-4 1000px:w-[70%] min-800px:w-[40%] max-800px:w-[70%] border-none outline-none bg-transparent ${errors[index]?.title ? 'max-800px:w-[20%]' : '1000px:w-[70%] min-800px:w-[40%] max-800px:w-[70%]'}`}
                    />
                    { errors[index]?.title && touched[index]?.title && <div className='text-red-600 text-[14px] px-1'>{errors[index]?.title}</div> }
                  </> : <>
                    <span className='py-4'>{ title || 'Learn Figma - UI/UX Desing Essential Training' }</span>
                    { errors[index]?.title && touched[index]?.title && <div className='text-red-600 text-[14px] px-1'>{errors[index]?.title}</div> }
                  </>
                }
                <div className="flex items-center gap-3">
                  <span className='text-[20px]' onClick={() => setCollapseEditName( collapseEditName === index ? -1 : index)}>
                    {
                      collapseEditName === index ? <VscSaveAs /> :  <GoPencil />
                    }
                    
                  </span>
                  <span 
                    className={`text-[20px] duration-150 ${collapseOpen === index && 'rotate-180'}`} 
                    onClick={() => setCollapseOpen( collapseOpen === index ? -1 : index)}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
              <div className={` flex flex-col w-full px-3 overflow-hidden ${collapseOpen === index ? 'py-3' : 'h-0 py-0'} duration-500`}>
                <Input
                  type='text' 
                  id='description' 
                  label='Description'
                  placeHolder='Description' 
                  error={errors[index]?.description} 
                  value={description}
                  onChange={(e) => handleChangeContent(index,  {description: e.target.value})}
                  as='textarea'
                  touched={touched[index]?.description}
                />
                <div className="flex gap-4 max-sm:flex-col">
                  <Input 
                    type='text' 
                    id='videoUrl' 
                    label='Video url'
                    placeHolder='https://demourl.com' 
                    error={errors[index]?.videoUrl} 
                    value={videoUrl}
                    onChange={(e) => handleChangeContent(index,  {videoUrl: e.target.value})}
                    touched={touched[index]?.videoUrl}
                  />
                  <Input 
                    type='text' 
                    id='suggestion' 
                    label='Suggestion'
                    placeHolder='suggestion' 
                    error={errors[index]?.suggestion} 
                    value={suggestion}
                    onChange={(e) => handleChangeContent(index,  {suggestion: e.target.value})}
                    touched={touched[index]?.suggestion}
                  />
                </div>
                <div className='flex flex-col items-stretch w-full mb-7'>
                  <label className={`text-dark mb-1 text-[15px] dark:text-seconde `}> 
                    Links
                  </label>
                  {
                    links.map(({title, url}: {title: any, url: any }, i: number) =>(<div className="flex flex-wrap gap-3 mb-3 1000px:justify-between" key={i}>
                      <input
                        type="text" 
                        placeholder='website'
                        className={`dark:border-primary-dark bg-transparent w-full  1000px:w-[49%] dark:text-primary-gray text-[14px] border-[1px] py-4 px-5 rounded-md outline-0 `}
                        onChange={e => handelLinkChange(index, i, {title: e.target.value})}
                      />
                      <input
                        type="text" 
                        placeholder='https://website.com'
                        className={`dark:border-primary-dark bg-transparent w-full  1000px:w-[49%] dark:text-primary-gray text-[14px] border-[1px] py-4 px-5 rounded-md outline-0 `}
                        onChange={e => handelLinkChange(index, i, {url: e.target.value})}
                      />
                    </div>))
                  }
                  <div className="w-full max-w-[130px] mt-4">
                    <Button 
                      content='Add Link'
                      variante='primary'
                      style='rounded-md w-full py-5 px-2 text-[13px]'
                      type='button'
                      onClick={() => handelAddLink(index)}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <input
                    type='file' 
                    id='videoThumb'
                    className='hidden'
                    onChange={e => handelFileChange(e, index)}
                  />
                  <label htmlFor='videoThumb' className={`dark:border-primary-dark  w-full dark:text-primary-gray text-[14px] border-[1px] rounded-md outline-0 min-h-[140px] flex justify-center items-center p-5 ${dragging ? 'bg-seconde-gray' : 'bg-transparent'}`}
                  onDragOver={handelDragOver}
                  onDragLeave={handelDragLeave}
                  onDrop={(e) => handelDrop(e, index)}
                  >
                    {
                      videoThumb ? <Image 
                        src={videoThumb} 
                        alt='Video thumbnail' 
                        width={'100'}
                        height={'100'}
                        className='w-full'
                      /> : <span>Drog and Drop your thumbnail here</span>
                    }
                  </label>

                </div>
              </div>
            </div>
          })
        }
        
      </form>
      
      <div className="w-full flex justify-start gap-3 mt-5 px-[40px]">
        <div className="w-full max-w-fit">
          <Button 
            content='Add New Content'
            variante='primary'
            style='rounded-md max-w-fit py-4 px-5 text-[13px]'
            type='button'
            onClick={handelAddNewContent}
          />
        </div>
      </div>
      <div className="w-full flex justify-between gap-3 mt-5 px-[40px]">
        <div className="w-full max-w-[130px]">
          <Button 
            content='prev'
            variante='primary'
            style='rounded-md w-full py-8 text-[15px]'
            type='button'
            onClick={() => setShowPage(--showPage)}
          />
        </div>
        <div className="w-full max-w-fit">
          <Button 
            content='Submit Course'
            variante='primary'
            style='rounded-md max-w-fit py-8 text-[15px]'
            type='submit'
            onClick={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CourseData;