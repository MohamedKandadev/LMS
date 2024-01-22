import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";


type Props = {
  id?: any;
  image?: string;
  ratings?: number;
  numberPurchased?: number;
  title?: string;
  price?: number;
  lesson?: number;
  isLoading?: boolean;
}

const CourseCard = ({ id, image, numberPurchased, ratings, title, price, lesson, isLoading }: Props) => {
  return (
    <Link href={`/course/${id}`} className='overflow-hidden  max-800px:m-auto h-full flex flex-col justify-between max-800px:w-full'>
      <div className="">
        <div className={`overflow-hidden w-full h-[210px] max-800px:h-[350px] rounded-xl ${isLoading && 'bg-gray-100'}`}>
          {!isLoading && <Image src={image ? image : require('../../public/assets/10.png')} alt='course image' className='w-full h-full' width={400} height={400}/>}
        </div>
        <div className="flex flex-col font-poppins pt-4">
          {!isLoading ? <>
            <div className="flex pb-2 text-[13px] items-center">
              <span className='text-yellow-600'>{ ratings }</span>
              <div className="mx-3 flex text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>
                ({ numberPurchased })
              </span>
            </div>
            <h3 className='dark:text-primary-gray font-[500] text-[16px]'>{ title }</h3>
          </> : <>
            <div className="w-[70%] p-1 mb-2 bg-gray-100 block"></div>
            <div className="w-full p-2 mb-1 bg-gray-100 block"></div>
            <div className="w-[70%] p-2 bg-gray-100 block"></div>
          </>
          }
        </div>
      </div>
      <div className="">
        <ul className='flex list-none text-gray-600 mt-4 w-full border-b-[.5px] dark:border-b-[.5px] border-[#EDEDED] dark:border-gray-600 pb-2'>
          {
            !isLoading ? <>
              <li className='flex items-center mr-2'>
                <span className='mr-2 text-[18px]'>
                  <CiViewList  />
                </span>
                <p className='text-[14px]'>
                  { lesson } lesson
                </p>
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[18px]'>
                  <IoIosStats  />
                </span>
                <p className='text-[14px]'>
                  Beginner
                </p>
              </li>
            </> : <li className='w-[50%] bg-gray-100 p-2'></li>
          }
        </ul>
        { !isLoading ? <div className="flex justify-between font-poppins mt-2">
            <span className='text-[13px] text-gray-600'>Mohamed kandad</span>
            <span className='font-[500] dark:text-gray-400'>${ price }</span>
          </div> : <div className="w-[30%] p-2 bg-gray-100 mt-2"></div>
        }
      </div>
    </Link>
  )
}

export default CourseCard