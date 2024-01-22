import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitcher from '../utils/ThemeSwitcher'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

type Props = {
  setOpen: any;
  isOpen: boolean;
}

const NavBar = ({ isOpen, setOpen }: Props) => {
  const auth = useSelector((state: any) => state.auth);
  const [openDrop, setOpenDrop] = React.useState(false);

  const handleOpenChange = React.useCallback(
    (event: React.SyntheticEvent | null, isOpenDrop: boolean) => {
      setOpenDrop(isOpenDrop);
    },
    [],
  );
  return (
    <div className='w-full  relative z-80 bg-white'>
      <div className={`fixed top-0 left-0 w-full h- [80px] z-[80] py-3 bg-white dark:bg-dark`}
      >
        <div className="w-[95%] 1500px:w-[98%] m-auto py-2 h-full flex items-center justify-between p-3">
          <div className="flex items-center gap-5"> 
            <HiOutlineMenuAlt3 
              size={25}
              className='cursor-pointer dark:text-white text-black'
              onClick={() => setOpen(!isOpen)}
            />
            <Link href={`/`} className='text-[25px] font-[700] text-black dark:text-white font-poppins'>
              eDemy
            </Link>
          </div>
          <div className="flex justify-center">
            {/* Nav Items */}
          </div>
          <div className="flex items-center">
            <div className="p-0 w-[50px] h-[50px] text-[29px] flex justify-center items-center text-primary-gray rounded-xl  hover:bg-seconde-gray hover:text-primary dark:hover:bg-[#2b1c55] ">
              <ThemeSwitcher />
            </div>
            <Dropdown  open={openDrop} onOpenChange={handleOpenChange}>
              <MenuButton style={{border: 'none', padding: '0', background: 'none'}} >
                <div className="relative p-0 w-[50px] h-[50px] text-[29px] flex justify-center items-center text-primary-gray rounded-xl hover:bg-seconde-gray hover:text-primary dark:hover:bg-[#2b1c55] ">
                  <IoMdNotificationsOutline />
                  <span className='absolute top-[2px] right-[2px] bg-primary flex justify-center items-center w-[20px] h-[20px] rounded-full text-[11px] text-white font-poppins '>2</span>
                </div>
              </MenuButton>
              <Menu placement="bottom-end" style={{border: 'none', padding: '0', overflow: 'hidden', borderRadius: '15px'}}>
                <div className="border-none p-[26px]">
                  <div className="font-poppins w-[400px] max-1000px:w-[300px] border-b-[1px] pb-[10px]">
                    <div className="flex justify-between text-[13px] text-dark font-[500] ">
                      <p>New question received</p>
                      <p>Mask as read</p>
                    </div>
                    <p className='text-[12px] pt-[12px] pb-[5px] inline-block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet a impedit fuga, incidunt odio officia soluta asperiores autem molestiae dignissimos cupiditate quidem, unde minima quis eos, enim eaque cum tempore.</p>
                    <span className='text-[12px] text-primary-gray font-[500] '>1 Hours Ago</span>
                  </div>
                </div>
              </Menu>
            </Dropdown>
            <Link href='/profile/dashboard' className='overflow-hidden rounded-xl w-[50px] h-[50px] ml-[12px]'>
              <Image src={auth.user?.avatar?.url || require('../../public/assets/profile-avatar.png')} alt='Profile Avatar' width='150' height={'150'}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar