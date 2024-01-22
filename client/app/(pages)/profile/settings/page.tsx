'use client'
import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel, tabClasses } from '@mui/joy';

import ProfileContent from '@/app/components/ProfileContent';
import EditProfile from '@/app/components/EditProfile';
import EditPassword from '@/app/components/EditPassword';



type Props = {}

const page = (props: Props) => {
  return (
    <ProfileContent heading='Settings'>
      <Tabs aria-label="Basic tabs" defaultValue={0} className='font-poppins' sx={{bgcolor: 'transparent'}}>
        <TabList sx={{
            pt: 1,
            background: 'transparent',
            justifyContent: 'start',
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              color: '#4f547b',
              bgcolor: 'transparent',
              fontWeight: '400',
              fontSize: '15px',
              '&:hover': {
                bgcolor: 'transparent',
                color: '#4f547b '
              },
              [`&.${tabClasses.selected}`]: {
                color: '#6440fb',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: '#6440fb',
                },
              },
            },
          }}>
          <div className="font-poppins flex  px-10 font-[300]">
            <Tab sx={{paddingY: '14px',}}>Edit Profile</Tab>
            <Tab>Password</Tab>
          </div>
        </TabList>
        <EditProfile value={0} />
        <EditPassword value={1} />
      </Tabs>
    </ProfileContent>
  )
}

export default page;