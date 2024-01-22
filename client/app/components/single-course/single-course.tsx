'use client'
import React from 'react'
import CourseDesc from './courseDesc';
import WhatLearn from './whatLearn';
import Requirement from './requirements';
import Content from './content';
import Reviews from './reviews';
import Info from './info';
import Header from './header';
import { useGetCourseQuery } from '@/redux/features/course/courseApi';
import Loader from '@/app/utils/loader';

type Props = {
  id: any;
}

const SingleCourse = ({ id }: Props) => {
  const { data, isLoading, isSuccess } = useGetCourseQuery(id);
  return (
    <>
    {
      (isLoading || !isSuccess) ? <Loader /> : 
      <div className="1000px:container mx-auto relative">
        <Header 
          title={data.course.name} 
          desc={data.course.description} 
          purchased={data.course.purchased} 
          rating={data.course.ratings} 
          lastUpdate={data.course.updatedAt}  
        />
        <Info 
          ImageUrl={data.course.thumbnail? data.course.thumbnail: null } 
          Lessons={data.course.courseData.length} 
          level={data.course.level} 
          price={data.course.price} 
        />
        <div className=" pl-20 max-1500px:pl-18 min-[1600px]:pl-32 max-1300px:pl-6 max-1100px:pl-2 max-1000px:px-4 mt-10">
          <div className="w-[60%] flex flex-col gap-y-16 max-1000px:w-full font-poppins mb-10">
            <CourseDesc 
              desc={data.course.description}  
            />
            <WhatLearn benefits={data.course.benefits} />
            <Requirement prerequisites={data.course.prerequisites} />
            <Content content={data.course.courseData} />
            <Reviews reviews={data.course.reviews} />
          </div>
        </div>
      </div>
    }
    
    </>
  )
}

export default SingleCourse