import React, { useEffect } from 'react'
import { format } from 'timeago.js' 

import { columnsCourses } from '@/helpers/table';
import Table from '../utils/Table';
import { useGetCoursesQuery } from '@/redux/features/course/courseApi';

type Props = {}

const Courses = (props: Props) => {
  const { data, isLoading, isSuccess } = useGetCoursesQuery({});
  console.log('ddddddddddddddddddddd', data)
  
  const coursesArray: any[] = []
  
  if(isSuccess && data){
    data.courses.forEach((item: any) => {
      coursesArray.push({
        _id: item._id,
        title: item.name,
        ratings: 4,
        purchased: 6,
        createdAt: format(item.createdAt)
      })
    })
  }
  
  return (
    <Table data={coursesArray} columns={columnsCourses} />
  )
}

export default Courses