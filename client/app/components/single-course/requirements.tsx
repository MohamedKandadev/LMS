import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

type Props = {
  prerequisites: any;
}

const Requirement = ({prerequisites}: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className='text-[19px] dark:text-primary font-[500] text-black mb-6'>Requirements</h3>
      <ul className='text-[#4f547b] flex flex-col gap-y-5'>
        {
          prerequisites.map((item: any, index: number) => <li className='flex items-center' key={index}>
            <span className='mr-1'><BsCheckAll /></span>
            <p className='text-[15px]' >{item.title}</p>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Requirement