'use client'
import React from 'react'
import CourseCard from './courseCard'
import Button from '../utils/Button'
import { useGetCoursesQuery } from '@/redux/features/course/courseApi'

type Props = {}

const PopularCourses = (props: Props) => {
  const { data, isError, isLoading, isSuccess } = useGetCoursesQuery({});
  
  return (
    <div className='m-auto py-20 w-[70%] max-1000px:w-[95%] max-1500px:w-[85%]'>
      <div className="flex justify-between items-center font-poppins mb-14">
        <div className="flex flex-col">
          <h3 className="text-black text-[28px] font-[600] max-800px:text-[22px] dark:text-primary">Our Most Popular Courses</h3>
          <p className='text-[15px] max-800px:text-[13px]'>10,000+ unique online course list designs</p>
        </div>
        <Button content='All Courses' href='/courses' variante='light' style='rounded-md' />
      </div>
      <div className="grid grid-cols-4 gap-9 max-1200px:grid-cols-3 max-800px:grid-cols-1 justify-center items-center">
        {
          data && data.courses.slice(0, 4).map((item: any) => (
            <CourseCard image={item?.thumbnail ? item?.thumbnail?.url: undefined} numberPurchased={4} ratings={5} title={item.name} key={item._id}  price={item.price} lesson={item.courseData.length}  />
          ))
        }
      </div>
    </div>
  )
}

export default PopularCourses