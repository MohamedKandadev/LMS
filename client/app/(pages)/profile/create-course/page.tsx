'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import ProfileContent from '@/app/components/ProfileContent';
import CreateCourse from '@/app/components/create-course';
import CourseOptions from '@/app/components/course-options';
import CourseContent from '@/app/components/course-data';
import { useCreateCourseMutation } from '@/redux/features/course/courseApi';

import { schemaCreateCourse, schemaCourseData } from '@/helpers/create-course';

type Props = {}

const page = (props: Props) => {
  const [showPage, setShowPage] = useState(1);
  const [createCourse, {data, isError, isSuccess, error, isLoading}] = useCreateCourseMutation();

  
  const formikCreateCourse = useFormik({
    initialValues: { 
      name: 'Next.js 14 & React - The Complete Guide', 
      description: 'Learn NextJS 14 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!', 
      price: 80, 
      estimatedPrice: 100, 
      tags: 'NEXTJS, FRONTEND, APP ROUTER', 
      level: 'advanced', 
      demoUrl: 'http://demourl.com', 
      thumbnail: '' 
    },
    validationSchema: schemaCreateCourse,
    onSubmit: async (values, { resetForm }) => {
      console.log('dfdfd')
      setShowPage(2)
    }
  })
  const formikCourseOptions = useFormik({
    initialValues: { 
      benefits: [
        {
          title: 'Learn how to build fullstack React apps with NextJS 14 & the App Router'
        },
        {
          title: 'Build real projects and apply what you learned with hands-on projects and examples'
        },
      ], prerequisites: [
        {
          title: 'ReactJS knowledge is strongly recommended, but the course also includes a complete React refresher module'
        },
        {
          title: 'NO prior NextJS knowledge is required'
        }
      ]
    },
    validationSchema: schemaCreateCourse,
    onSubmit: async () => {
      setShowPage(3)
    }
  })
  const formikCourseContent = useFormik({
    initialValues: [
      {
        title: 'What is Nextjs? Wyh would you use it?',
        description: 'What is Nextjs? Wyh would you use it?',
        videoUrl: 'http://videoUrl.com',
        videoThumb: '',
        links: [
          {title: 'github', url: 'http://github.com'},
          {title: 'website', url: 'http://website.com'},
        ],
        suggestion: 'frontend',
      },
      {
        title: 'Key Features Benefits Of NextJS',
        description: 'Key Features Benefits Of NextJS',
        videoUrl: 'http://videoUrl.com',
        videoThumb: '',
        links: [
          {title: 'github', url: 'http://github.com'},
          {title: 'website', url: 'http://website.com'},
        ],
        suggestion: 'frontend',
      },
    ],
    validationSchema: schemaCourseData,
    onSubmit: async (values, { resetForm }) => {
      const Course = {
        course: formikCreateCourse.values,
        options: formikCourseOptions.values,
        content: values
      }
      await createCourse(Course);
    }
  })

  useEffect(()=> {
    if(isSuccess){
      toast.success(data);
      formikCreateCourse.resetForm()
      formikCourseOptions.resetForm()
      formikCourseContent.resetForm();
      setShowPage(1)
    }
    if(isError){
      toast.error(data);
    }
  }, [isSuccess, isError, data])
  
  return (
    <ProfileContent heading='Create New Course'>
      {
        showPage === 1 &&
        <CreateCourse formik={formikCreateCourse} showPage={showPage} setShowPage={setShowPage} />
      }
      {
        showPage === 2 &&
        <CourseOptions formik={formikCourseOptions} showPage={showPage} setShowPage={setShowPage} />
      }
      {
        showPage === 3 &&
        <CourseContent formik={formikCourseContent} showPage={showPage} setShowPage={setShowPage} isLoading={isLoading}/>
      }
      <ToastContainer />
    </ProfileContent>
  )
}

export default page;