'use client'
import React, { useEffect, useState } from 'react';
import ProfileContent from '@/app/components/ProfileContent';
import Users from '@/app/components/users';

type Props = {
  Users: any
}

const page = ({}: Props) => {

  return (
    <ProfileContent heading='Users'>
      <Users />
    </ProfileContent>
  )
}

export default page;