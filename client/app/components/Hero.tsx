import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../utils/Button';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='max-1000px:pt-28 h-[100vh] flex justify-center items-center bg-white dark:bg-dark w-full'>
        <Image src={require('../../public/assets/hero-img-left.svg')} alt='image hero left' className='absolute top-0 left-0'/>
        <Image src={require('../../public/assets/hero-img-right.svg')} alt='image hero left' className='absolute top-0 right-0'/>
        <Image src={require('../../public/assets/hero-back.png')} alt='image hero left' className='absolute top-0 right-0 z-10'/>
      <div className="flex w-[70%] max-1000px:w-[90%] max-1000px:gap-5  max-1000px:flex-wrap max-1500px:w-[85%] justify-center">
        <div className="flex z-40 justify-center max-1000px:w-[80%] max-800px:w-[95%] flex-col w-[45%] font-poppins">
          <h4 className='text-primary block max-800px:text-[14px] '>Start learning for free</h4>
          <h2 className='text-[60px] font-[600] max-1000px:text-[40px] max-800px:text-[37px] max-400px:text-[33px]'>Build Data Skills <br />
            <span className='text-primary'>
              Online
            </span>
          </h2>
          <p className='text-[14px] max-800px:text-[12px]'>
            Data drives everything. Get the skills you need <br />
            for the future of work.
          </p>
          <div className="items-center flex mt-10 z-40 gap-5">
            <Button 
              content='Join For Free'
              href='/login'
              variante='seconde'
            />
            <Button 
              content='Find Courses'
              href='/sign-up'
              variante='primary'
            />
          </div>
        </div>
        <div className="flex w-[60%] max-1000px:w-[80%] max-800px:w-[95%] justify-end">
          <Image src={require('../../public/assets/hero-img.png')} alt='image hero left' className='  '/>
        </div>
      </div>
    </div>
  )
}

export default Hero;