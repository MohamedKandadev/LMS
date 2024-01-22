import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { HiOutlineCash } from 'react-icons/hi'
import { MdOutlineTimer } from 'react-icons/md'

type Props = {
  title: string;
  desc: string;
  rating: number;
  purchased: number;
  lastUpdate: any;
}

const header = ({ desc, purchased, rating, title, lastUpdate }: Props) => {
  return (
    <div className="relative w-[100%] font-poppins mt-32 bg-primary dark:bg-primary-dark py-24 rounded-lg max-800px:rounded-none pl-20 max-1500px:pl-18 min-[1600px]:pl-32 max-1300px:pl-6 max-1100px:pl-2 max-1000px:px-4">
      <div className="w-[60%] max-1000px:w-full">
            <ul className='flex list-none gap-3 mb-6'>
              <li className='text-[12px] px-3 py-1 bg-green-500 rounded-full text-white'>BEST SELLER</li>
              <li className='text-[12px] px-3 py-1 bg-light rounded-full text-white'>NEW</li>
              <li className='text-[12px] px-3 py-1 bg-blue-800 rounded-full text-white'>POPULAR</li>
            </ul>
            <h2 className='text-[30px] text-white font-[600] mb-4 dark:text-primary'>{title}</h2>
            <p className='text-[14px] text-white mb-8 w-[60%]' >{desc}</p>
            <div className="flex gap-x-8 gap-y-2 flex-wrap">
              <div className="flex pb-2 text-[13px] items-center">
                <span className='text-green-500'>{rating}</span>
                <div className="mx-3 flex gap-2 text-green-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className='text-white'>
                  ({purchased})
                </span>
              </div>
              <div className="text-white flex gap-1">
                <span>
                  <HiOutlineCash />
                </span>
                <p className='text-[13px]'>{purchased} enrolled on this course</p>
              </div>
              <div className="text-white flex gap-1">
                <span>
                  <MdOutlineTimer />
                </span>
                <p className='text-[13px]'>Last updated {lastUpdate}</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default header