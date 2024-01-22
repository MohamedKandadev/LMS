'use client'
import React, { useEffect, useState } from 'react';
import ProfileContent from '@/app/components/ProfileContent';
import Courses from '@/app/components/courses';

type Props = {
  courses: any
}

const page = ({}: Props) => {

  return (
    <ProfileContent heading='Courses'>
      <Courses />
    </ProfileContent>
  )
}

export default page;