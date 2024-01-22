'use client'
import React, { useEffect, useState } from 'react';
import ProfileContent from '@/app/components/ProfileContent';
import Users from '@/app/components/users';

type Props = {
  Users: any
}

const page = ({}: Props) => {

  return (
    <ProfileContent heading='Manage Team'>
      <Users isAdmin={true} />
    </ProfileContent>
  )
}

export default page;