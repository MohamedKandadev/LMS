'use client';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi';

import NavItems from '../utils/NavItems'; 
import ThemeSwitcher from '../utils/ThemeSwitcher'; 
import Button from '../utils/Button';
import { useLogOutQuery } from '@/redux/features/auth/authApi';
import { signOut } from 'next-auth/react'
import Image from 'next/image';

type Props = {}

const Header: FC<Props> = ({}) => {
  const [active, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, { skip: !logout });
  const {user} = useSelector((state: any) => state?.auth);
  const handelClose = (e: any) => {
    if(e.target.id === 'sidebar-mobile')
      setOpen(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      setActive(window.scrollY > 20)
      console.log(window.scrollY > 150, window.scrollY)
    }
    );
    if(logout)
      signOut()
  },[logout])
  return (
    <div className={`${active ? 'bg-white dark:bg-dark shadow-md': ''} fixed top-0 left-0 w-full h- [80px] z-[80] py-3 duration-100`}>
      <div>
        <div className="w-[95%] 1500px:w-[92%] m-auto py-2 h-full flex items-center justify-between p-3">
          <Link href={`/`} className='text-[25px] font-[700] text-black dark:text-white font-poppins'>
            eDemy
          </Link>
          <div className="flex justify-center">
            <NavItems activeItem={2} isMobile={false} />
            {
              isOpen && (<div 
                className='fixed top-0 left-0 h-screen z-[999] dark:bg-[#0000005a] bg-[#0000005a] w-screen' 
                onClick={handelClose}
                id='sidebar-mobile'
              >
                <div className="fixed top-0 w-[70%] h-[100%] bg-white dark:bg-dark items-center flex flex-col pt-10">
                  <Link href={`/`} className='text-[25px] font-[700] text-dark dark:text-white font-poppins pb-24'>
                    eDemy
                  </Link>
                  <NavItems activeItem={2} isMobile={true} />
                  <div className="flex flex-col items-center justify-center ">
                    <Link href='/login' className="text-[15px] py-3 px-7 dark:border-white max-h-[48px] bg-white text-primary border-seconde border-2 rounded-full font-poppins mb-4 hover:bg-primary dark:bg-dark dark:text-white dark:hover:bg-dark hover:text-seconde duration-200">Log in </Link>
                    <Link href={'/sign-up'} className="text-[15px] py-3 px-7 max-h-[48px] bg-seconde text-primary rounded-full font-poppins border-seconde border-2 dark:border-white hover:bg-white hover:text-primary duration-200">Sign up </Link>
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            {/* For Mobile */}
            <div className="1500px:hidden">
              <HiOutlineMenuAlt3 
                size={25}
                className='cursor-pointer dark:text-white text-black'
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="items-center hidden 1500px:flex gap-3">
              {!user ? <>
                  <Button 
                    content='Log in'
                    href='/auth/login'
                    variante='link'
                  />
                  <Button 
                    content='Sign up'
                    href='/auth/sign-up'
                    variante='light'
                  />
                </> :  <>
                  <Button 
                    type='button'
                    content='Log out'
                    onClick={() => setLogout(true)}
                    variante='primary'
                  />
                  <Link href='/profile/dashboard' className='overflow-hidden rounded-3xl w-[50px] h-[50px] '>
                    <Image src={user?.avatar?.url || require('../../public/assets/profile-avatar.png')} alt='Profile Avatar' width='150' height={'150'}/>
                  </Link>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;