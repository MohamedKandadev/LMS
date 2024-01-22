'use client'
import React, { useState } from 'react'

import NavBar from '@/app/components/NavBar'
import Protected from '@/hooks/useProtect'
import MainContent from '@/app/components/MainContent'
import SideBar from '@/app/components/SideBar'

type Props = {
  children: any
}

const ProfileLayout = ({children}: Props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Protected isUserAuth={true}>
      <NavBar isOpen={isOpen} setOpen={setOpen}/>
      <SideBar isOpen={isOpen} setOpen={setOpen}/>
      <div className={`${isOpen ? '1000px:w-[calc(100%-300px)] 1000px:ml-[300px]' : 'w-full' } 1000px:max-w-full min-h-[calc(100vh-90px)] mt-[90px] 1000px:px-8 duration-500`}>
        <div className="w-full h-full bg-seconde-gray dark:bg-[#2b1c55] 1000px:rounded-2xl max-1000px:px-6 px-16 py-14">
          {children}
        </div>
      </div>
    </Protected>
  )
}

export default ProfileLayout