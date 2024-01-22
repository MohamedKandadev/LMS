import React from 'react'
import { LiaCheckCircle } from 'react-icons/lia'

type Props = {
  benefits: any;
}

const WhatLearn = ({benefits}: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className='text-[19px] dark:text-primary font-[500] text-black mb-6'>What you'll learn</h3>
      <ul className='text-[#4f547b]'>
        {
          benefits.map((item: any, index: number) => <li className='flex items-center' key={index}>
            <span className='mr-1'><LiaCheckCircle /></span>
            <p className='text-[15px]' >{item.title}</p>
          </li>)
        }
        
      </ul>
    </div>
  )
}

export default WhatLearn