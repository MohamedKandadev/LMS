import React from 'react'

type Props = {
  desc: string;
}

const CourseDesc = ({ desc }: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className='text-[17px] dark:text-primary font-[500] text-black mb-10'>Description</h3>
      <p className='text-[#4f547b] text-[15px]'>{desc}</p>
    </div>
  )
}

export default CourseDesc