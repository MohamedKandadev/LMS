import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlinePoweroff } from "react-icons/ai";

import { useLogOutQuery } from '@/redux/features/auth/authApi';
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import { sidebarItems } from '@/helpers/sidebar';

type Props = {
  setOpen: any;
  isOpen: boolean;
}

const SideBar = ({ isOpen, setOpen }: Props) => {
  const auth = useSelector((state: any) => state.auth)
  const pathName = usePathname();
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, { skip: !logout });
  const handelClose = (e: any) => {
    if(e.target.id === 'sidebar-mobile')
      setOpen(false);
  }
  useEffect(() => {
    if(logout)
      signOut()
    
    setOpen(false);
  },[logout, pathName])
  return (
    <div className={`${isOpen ? 'max-1000px:bg-[#0000005a] z-50' : 'z-[-1]'} max-1000px:w-full h-[calc(100vh-90px)] fixed top-0 left-0 mt-[90px] duration-300`}
    onClick={handelClose} id='sidebar-mobile'>
      <div className={`${!isOpen && 'translate-x-[-100%]'} max-1000px:w-[450px] duration-500 transition-transform bg-white dark:bg-dark  overflow-y-scroll  w-[300px] h-[100%] z-[80] py-3 `}>
        <ul className='px-6 flex flex-col gap-'>
          {
            sidebarItems.map(({title, href, user, Icon}, index) => (
              user.includes(auth?.user.role) && <li key={index} className={`${pathName === `/profile/${href}` ? "bg-dark text-white dark:bg-seconde dark:text-dark " : "text-primary-gray dark:text-seconde"} px-4 py-4 rounded-[1.1rem]`}>
              <Link href={href} className='flex gap-3 items-center font-poppins font-[500] text-[17px] '>
                <span className='text-[23px] '>
                  <Icon />
                </span>
                { title }
                </Link>
              </li>
            ))
          }

          <li className='px-4 py-4'>
            <button onClick={() => setLogout(true)} className='flex gap-3 items-center font-poppins font-[500] text-[17px] text-primary-gray  dark:text-seconde'>
              <span className='text-[23px] '>
                <AiOutlinePoweroff size={20}/>
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar