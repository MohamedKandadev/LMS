import React from 'react'

type Props = {
  title?: string;
}

const HeaderPage = ({title}: Props) => {
  return (
    <div className='bg-[#f5f7fe] dark:bg-primary-dark py-4 mt-[87px]'>
      <div className="relative m-auto w-[70%] max-1500px:w-[85%] font-poppins">
        <ul className='flex text-[13px] items-center text-gray-500 gap-2'>
          <li>Home</li>
          <li className='w-[4px] h-[4px] bg-gray-500 rounded-full'></li>
          <li>All courses</li>
          {
            title && <li>{title}</li>
          }
        </ul>
      </div>
    </div>
  )
}

export default HeaderPage