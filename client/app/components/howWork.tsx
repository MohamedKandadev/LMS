import React from 'react';
import { FiUserPlus } from "react-icons/fi";
import { BsHandIndexThumb } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import Image from 'next/image';

type Props = {}

const HowWork = (props: Props) => {
  return (
    <div className="w-full">
      <div className='m-auto py-20 w-[70%] max-1200px:w-[95%] max-1500px:w-[85%] grid grid-cols-2 gap-10 max-1200px:grid-cols-1 font-poppins '>
        <div className="flex flex-col 1200px:pr-32 max-1200px:order-2">
          <h1 className='text-[45px] font-[600] mb-4'>How it <span className='text-primary'>Works</span></h1>
          <p className='text-[14px] text-dark dark:text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
          <div className="flex flex-col list-none mt-20 gap-10">
            <div className='flex'>
              <div className='w-[85px] h-[85px] bg-[#e5f0fd] text-[33px] text-primary flex flex-shrink-0 justify-center items-center rounded-full mr-6 1000px:mr-5'>
                <FiUserPlus  />
              </div>
              <div className="flex flex-col">
                <h5 className='text-[15px] text-dark dark:text-seconde font-[500] mb-2'>Create Account</h5>
                <p className='text-[14px] text-gray-500'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[85px] h-[85px] bg-[#e5f0fd] text-[33px] text-primary flex flex-shrink-0 justify-center items-center rounded-full mr-6 1000px:mr-5'>
                <BsHandIndexThumb  />
              </div>
              <div className="flex flex-col">
                <h5 className='text-[15px] text-dark dark:text-seconde font-[500] mb-2'>Select Course</h5>
                <p className='text-[14px] text-gray-500'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-[85px] h-[85px] bg-[#e5f0fd]  text-[33px] text-primary flex flex-shrink-0 justify-center items-center rounded-full mr-6 1000px:mr-5'>
                <MdVideoLibrary  />
              </div>
              <div className="flex flex-col">
                <h5 className='text-[15px] text-dark dark:text-seconde font-[500] mb-2'>Enjoy Your Courses</h5>
                <p className='text-[14px] text-gray-500'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end max-1200px:justify-center max-1200px:flex-col max-1200px:items-center max-1200px:gap-5">
          <Image src={require('../../public/assets/1.png')} alt='' />
          <Image src={require('../../public/assets/2.png')} alt='' className='1200px:absolute 1200px:left-0 1200px:bottom-[-100px] ' />
          <div className="absolute top-[50px] left-[100px] shadow-md max-1200px:hidden  w-[250px] flex bg-white rounded-md py-4 px-5">
            <div className='w-[60px] h-[60px] bg-[#fce5e2] dark:bg-dark text-[33px] text-[#e8543e] flex flex-shrink-0 justify-center items-center rounded-full mr-6 max-1200px:m-auto min-1200px:mr-5'>
              <MdBusinessCenter  />
            </div>
            <div className="flex flex-col justify-center">
              <span className='text-[#e8543e] font-[500]'>3000+</span>
              <p className='text-dark text-[15px]'>Free Courses</p>
            </div>
          </div>
          <div className="1200px:absolute 1200px:bottom-[0] 1200px:left-[200px] shadow-md w-fit flex bg-white rounded-md py-4 px-5">
            <div className='w-[60px] h-[60px] bg-[#6440fb] dark:bg-dark text-[33px] text-white flex flex-shrink-0 justify-center items-center rounded-full mr-6 max-1200px:m-automin-1200px:mr-5'>
              <MdBusinessCenter  />
            </div>
            <div className="flex flex-col justify-center">
              <p className='text-[#6440fb] text-[15px] font-[500]'>Congrats!</p>
              <p className='text-dark text-[15px]'>Your Admission Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWork