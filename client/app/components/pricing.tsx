import React from 'react'
import Button from '../utils/Button'
import Image from 'next/image'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className='relative m-auto pt-24 1200px:pb-56 max-1200px:pb-24 w-[70%] max-1300px:w-[95%] max-1500px:w-[85%] font-poppins mt-20'>
      <h2 className='font-poppins text-[30px] font-[600] text-black text-center dark:text-white'>Simple Pricing</h2>
      <div className="grid grid-cols-3 gap-10 mt-14 w-full max-1000px:grid-cols-2 max-800px:grid-cols-1  max-1300px:gap-4">
        <div className="py-14 px-16 max-800px:max-w-[80%] max-800px:m-auto shadow-xl bg-white rounded-3xl text-center flex flex-col font-poppins dark:bg-primary-dark">
          <p className='text-[18px] text-black mb-1 dark:text-white'>Basic</p>
          <h3 className='text-[40px] font-bold dark:text-dark'>Free</h3>
          <p className='text-gray-600 text-[14px] dark:text-gray-500'>per month</p>
          <div className="flex justify-center my-10">
            <Image src={require('../../public/assets/price-1.svg')} alt='icon' />
          </div>
          <p className='text-left mt-3 text-[15px] text-gray-700 dark:text-gray-500'>Standard listing submission, active for 30 dayss</p>
          <ul className='list-none my-8 text-left text-[14px] text-gray-600 dark:text-gray-500 flex flex-col gap-3'>
            <li>All Operating Supported</li>
            <li>Great Interface</li>
            <li>Allows encryption</li>
            <li>Face recognized system</li>
            <li>24/7 Full support</li>
          </ul>
          <div className="w-full m-auto flex justify-center">
            <Button content='Get Started Now' variante='light' />
          </div>
        </div>
        <div className="py-14 px-16 max-800px:max-w-[80%] max-800px:m-auto shadow-xl bg-white rounded-3xl text-center flex flex-col font-poppins dark:bg-primary-dark">
          <p className='text-[18px] text-black mb-1 dark:text-white'>Professional</p>
          <h3 className='text-[40px] font-bold dark:text-dark'>$599.95</h3>
          <p className='text-gray-600 text-[14px] dark:text-gray-500'>per month</p>
          <div className="flex justify-center my-10">
            <Image src={require('../../public/assets/price-2.svg')} alt='icon' />
          </div>
          <p className='text-left mt-3 text-[15px] text-gray-700 dark:text-gray-500'>Standard listing submission, active for 30 dayss</p>
          <ul className='list-none my-8 text-left text-[14px] text-gray-600 dark:text-gray-500 flex flex-col gap-3'>
            <li>All Operating Supported</li>
            <li>Great Interface</li>
            <li>Allows encryption</li>
            <li>Face recognized system</li>
            <li>24/7 Full support</li>
          </ul>
          <div className="w-full m-auto flex justify-center">
            <Button content='Get Started Now' variante='light' />
          </div>
        </div>
        <div className="py-14 px-16 max-800px:max-w-[80%] max-800px:m-auto shadow-xl bg-white rounded-3xl text-center flex flex-col font-poppins dark:bg-primary-dark">
          <p className='text-[18px] text-black mb-1 dark:text-white'>Business</p>
          <h3 className='text-[40px] font-bold dark:text-dark'>$999.95</h3>
          <p className='text-gray-600 text-[14px] dark:text-gray-500'>per month</p>
          <div className="flex justify-center my-10">
            <Image src={require('../../public/assets/price-3.svg')} alt='icon' />
          </div>
          <p className='text-left mt-3 text-[15px] text-gray-700 dark:text-gray-500'>Standard listing submission, active for 30 dayss</p>
          <ul className='list-none my-8 text-left text-[14px] text-gray-600 dark:text-gray-500 flex flex-col gap-3'>
            <li>All Operating Supported</li>
            <li>Great Interface</li>
            <li>Allows encryption</li>
            <li>Face recognized system</li>
            <li>24/7 Full support</li>
          </ul>
          <div className="w-full m-auto flex justify-center">
            <Button content='Get Started Now' variante='light' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing