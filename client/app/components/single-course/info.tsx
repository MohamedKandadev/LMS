import Button from '@/app/utils/Button'
import Image from 'next/image'
import React from 'react'
import { HiLanguage } from 'react-icons/hi2'
import { IoIosInfinite, IoIosStats } from 'react-icons/io'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { PiCertificate } from 'react-icons/pi'
import { IoPlay } from "react-icons/io5";

type Props = {
  price: number;
  Lessons: number;
  level: string;
  ImageUrl: string;
}

const Info = ({ Lessons, level, price, ImageUrl }: Props) => {
  return (
    <div className="1000px:absolute max-1000px:w-full top-10 right-10 h-full">
      <div className="1000px:sticky top-24 bottom-10 1000px:rounded-xl max-1000px:w-full 1000px:shadow-2xl 1000px:bg-white 1000px:dark:bg-dark p-3 w-[360px] font-poppins">
        <div className="h-[250px] max-1000px:h-[300px] relative">
          <Image src={ImageUrl !== null ? ImageUrl : require('../../../public/assets/10.png')} className='w-full h-full' width={300} height={300} alt='course image' />
          <div className="absolute left-[50%] top-[50%] w-[60px] h-[60px] rounded-full bg-seconde dark:bg-dark dark:text-primary flex justify-center items-center text-[23px] translate-x-[-50%] translate-y-[-50%] cursor-pointer font-[700] text-[#4f547b] ">
            <IoPlay />
          </div>
        </div>
        <div className="p-4">
          <p className="text-[18px] font-[600] mb-3 dark:text-primary">${price}</p>
          <Button content='Buy Now' href='/checkout' variante='primary' type='submit' style='rounded-md py-6 w-full' />
          <ul className="list-none mt-5">
            <li className='flex justify-between items-center text-[#4f547b] py-4 border-b-[1px]'>
              <div className="flex items-center">
                <span className='mr-1'><MdOutlineSlowMotionVideo /></span>
                <p className='text-[15px]' >Lessons</p>
              </div>
              <p className='text-[15px]' >{Lessons}</p>
            </li>
            <li className='flex justify-between items-center text-[#4f547b] py-4 border-b-[1px]'>
              <div className="flex items-center">
                <span className='mr-1'><IoIosStats /></span>
                <p className='text-[15px]' >Skill level</p>
              </div>
              <p className='text-[15px]' >{level}</p>
            </li>
            <li className='flex justify-between items-center text-[#4f547b] py-4 border-b-[1px]'>
              <div className="flex items-center">
                <span className='mr-1'><HiLanguage /></span>
                <p className='text-[15px]' >Language</p>
              </div>
              <p className='text-[15px]' >English</p>
            </li>
            <li className='flex justify-between items-center text-[#4f547b] py-4 border-b-[1px]'>
              <div className="flex items-center">
                <span className='mr-1'><PiCertificate /></span>
                <p className='text-[15px]' >Certificate</p>
              </div>
              <p className='text-[15px]' >Yes</p>
            </li>
            <li className='flex justify-between items-center text-[#4f547b] py-4 border-b-[1px]'>
              <div className="flex items-center">
                <span className='mr-1'><IoIosInfinite /></span>
                <p className='text-[15px]' >Full lifetime access</p>
              </div>
              <p className='text-[15px]' >Yes</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Info