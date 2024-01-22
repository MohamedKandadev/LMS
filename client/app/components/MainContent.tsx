import React from 'react'
import SideBar from './SideBar';

type Props = {
  children: any;
  isOpen: boolean;
  setOpen: any;
}

const MainContent = ({children}: Props) => {
  return (
    <div className='w-full flex relative'>
      <SideBar />
      {children}
    </div>
  )
}

export default MainContent