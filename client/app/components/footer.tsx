import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="w-full  border-t-[1px] dark:border-[#2B1C55]">
      <div className='relative m-auto w-[70%] max-1300px:w-[95%] max-1500px:w-[85%] font-poppins pt-16 pb-10'>
        <h3 className='text-[28px] text-black text-center font-[600] mb-2 dark:text-primary'>Top Categories</h3>
        <p className='text-[14px] text-center text-gray-500'>10,000+ unique online course list designs</p>
        <div className="grid grid-cols-4 mt-16 gap-10 max-1000px:grid-cols-2">
          <ul className='flex flex-col list-none gap-3'>
            <li className='text-black dark:text-primary mb-3 text-[16px] font-[500]'>Creative</li>
            <li className='text-gray-500 text-[15px]'>Animation</li>
            <li className='text-gray-500 text-[15px]'>Drawing</li>
            <li className='text-gray-500 text-[15px]'>Graphic Design</li>
            <li className='text-gray-500 text-[15px]'>Illustration</li>
            <li className='text-gray-500 text-[15px]'>Photography</li>
          </ul>
          <ul className='flex flex-col list-none gap-3'>
            <li className='text-black dark:text-primary mb-3 text-[16px] font-[500]'>Business</li>
            <li className='text-gray-500 text-[15px]'>Animation</li>
            <li className='text-gray-500 text-[15px]'>Drawing</li>
            <li className='text-gray-500 text-[15px]'>Graphic Design</li>
            <li className='text-gray-500 text-[15px]'>Illustration</li>
            <li className='text-gray-500 text-[15px]'>Photography</li>
          </ul>
          <ul className='flex flex-col list-none gap-3'>
            <li className='text-black dark:text-primary mb-3 text-[16px] font-[500]'>Creative</li>
            <li className='text-gray-500 text-[15px]'>Animation</li>
            <li className='text-gray-500 text-[15px]'>Drawing</li>
            <li className='text-gray-500 text-[15px]'>Graphic Design</li>
            <li className='text-gray-500 text-[15px]'>Illustration</li>
            <li className='text-gray-500 text-[15px]'>Photography</li>
          </ul>
          <ul className='flex flex-col list-none gap-3'>
            <li className='text-black dark:text-primary mb-3 text-[16px] font-[500]'>Business</li>
            <li className='text-gray-500 text-[15px]'>Animation</li>
            <li className='text-gray-500 text-[15px]'>Drawing</li>
            <li className='text-gray-500 text-[15px]'>Graphic Design</li>
            <li className='text-gray-500 text-[15px]'>Illustration</li>
            <li className='text-gray-500 text-[15px]'>Photography</li>
          </ul>
        </div>
        <div className="text-center text-[15px] mt-20">
          Copyright © 2023 Developed by 
          <a href="https://kandadev.tech/" target='_blank' className='italic text-primary font-[500]'> Kandad Mohamed </a>
          with ❤️
        </div>
      </div>
    </div>
  )
}

export default Footer