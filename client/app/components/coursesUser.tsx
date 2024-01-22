'use client'
import { useGetCoursesQuery } from '@/redux/features/course/courseApi'
import React, { useState } from 'react'
import CourseCard from './courseCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEllipseOutline } from 'react-icons/io5';
import * as Select from '@radix-ui/react-select'
import Input from '../utils/Input';

type Props = {}

const CoursesUser = (props: Props) => {
  const [filter, setFilter] = useState({
    page: 1,
    sort: 'default',
    search: '',
  }) 
  const { data, isLoading, isSuccess, } = useGetCoursesQuery(filter);
  
  const handelPaginate = (value: any) => {
    if(value === 'prev'){
      if(filter.page > 1)
        setFilter(prev => ({...prev, page: prev.page - 1}));
    }else if(value === 'next'){
      if(filter.page < Math.ceil(data?.numberCourses / 8))
      setFilter(prev => ({...prev, page: prev.page + 1}));
    }else {
      setFilter(prev => ({...prev, page: value}));
    }
  }
  return (
    <div className='relative m-auto pt-24 1200px:pb-56 max-1200px:pb-24 w-[70%] max-1000px:w-[95%] max-1500px:w-[85%] font-poppins mt-20'>
      <div className="w-full mb-3 flex gap-4 justify-between  max-800px:flex-col 800px:items-center">
        <p className='text-[14px] mr-2 font-[500] text-gray-600'>Showing <span className='text-black font-[500] dark:text-primary'>{data?.numberCourses}</span> total results</p>
        <div className="flex gap-2">
          <div className="">
            <label htmlFor="sort" className='text-[14px] mr-2 font-[500] dark:text-primary'>Sort by: </label>
            <select onChange={e => setFilter(prev => ({...prev, sort: e.target.value}))} id='sort' className='rounded-lg bg-[#f5f7fe] dark:bg-primary-dark text-gray-600 text-[14px] font-poppins px-7 py-4 mi-h-[35px] outline-none border-none'>
              <option value="default" className='text-gray-600 text-[14px] font-poppins bg-white border-0 p-2'>Default</option>
              <option value={'-ratings'} className='text-gray-600 text-[14px] font-poppins bg-white'>Rating (asc)</option>
              <option value={'ratings'} className='text-gray-600 text-[14px] font-poppins bg-white'>Rating (dsc)</option>
              <option value={'-price'} className='text-gray-600 text-[14px] font-poppins bg-white'>Price (asc)</option>
              <option value={'price'} className='text-gray-600 text-[14px] font-poppins bg-white'>Price (dsc)</option>
            </select>
          </div>
          <input type="text" placeholder='Search' className='max-w-[300px] py-4 px-7 bg-[#f5f7fe] dark:bg-primary-dark font-poppins text-[14px] text-gray-600 rounded-lg outline-none' onChange={e => setFilter(prev => ({...prev, search: e.target.value}))}/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-9 max-1200px:grid-cols-3 max-800px:grid-cols-1 mb-10">
        {
          !isLoading ? (isSuccess && data.courses.map((item: any) => (
            <CourseCard id={item._id} image={item?.thumbnail ? item?.thumbnail?.url: undefined} numberPurchased={4} ratings={5} title={item.name} key={item._id} price={item.price} lesson={item.courseData.length} />
          ))) : <>
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
            <CourseCard isLoading={true} />
          </>
        }
      </div>
      <ul className='flex m-auto font-poppins gap-5 items-center justify-center'>
        <li className='w-[40px] h-[40px] rounded-full bg-[#e5f0fd] dark:bg-primary-dark text-primary flex justify-center items-center cursor-pointer' onClick={()=>handelPaginate('prev')}>
          <IoIosArrowBack />
        </li>
        {
          data && Array(Math.ceil(data?.numberCourses / 8 )).fill(0).map((item: any, index) => {
            return <li key={index} className={`cursor-pointer dark:text-gray-600 px-1 ${filter.page === (index + 1) && 'border-b-2 border-primary'}`} onClick={()=>handelPaginate(index + 1)}>
              {index + 1}
            </li>
          })
        }
        <li className='w-[40px] h-[40px] rounded-full bg-[#e5f0fd] dark:bg-primary-dark text-primary flex justify-center items-center cursor-pointer' onClick={()=>handelPaginate('next')}>
          <IoIosArrowForward />
        </li>
      </ul>
    </div>
  )
}

export default CoursesUser