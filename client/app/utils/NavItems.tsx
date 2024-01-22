import Link from 'next/link';
import React from 'react'

export const navItemsData = [
  {
    name: "Home",
    url: '/'
  },
  {
    name: "Courses",
    url: '/courses'
  },
  {
    name: "About",
    url: '/about'
  },
  {
    name: " Policy",
    url: '/policy'
  },
  {
    name: "FAQ",
    url: '/faq'
  },
]

type Props = {
  isMobile: boolean;
  activeItem: number; 
}

const NavItems = ({ activeItem, isMobile }: Props) => {
  return (
    <>
      <div className='hidden 1500px:flex'>
        {
          navItemsData && navItemsData.map((item, index) => (
            <Link href={`${item.url}`} key={index} passHref={true}>
              <span className={`${activeItem === index ? 'text-primary' : 'text-dark' } text-[15px] px-8 font-poppins font-[400] text-dark dark:text-white`}>
                { item.name }
              </span>
            </Link>
          ))
        }
      </div>
      {
        isMobile && (
          <div className='1500px:hidden'>
            <div className="w-full text-center py-6 flex-col flex">
              {
                navItemsData && navItemsData.map((item, index) => (
                  <Link href={item.url} key={index} className='mb-7'>
                    <span className={`${activeItem === index ? 'text-primary' : 'text-dark' } dark:text-white text-[20px] px-8 font-poppins font-[400]`}>
                      { item.name }
                    </span>
                  </Link>
                ))
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default NavItems