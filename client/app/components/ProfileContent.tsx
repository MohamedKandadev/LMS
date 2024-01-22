import React from 'react'

type Props = {
  children: any,
  heading: string,
  className?: string;
}

const ProfileContent = ({children, heading, className}: Props) => {
  return (
    <div className={`font-poppins ${className}`}>
      <div className='pb-8'>
        <h1 className='text-[27px] font-[600]'>{heading}</h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetur.</p> */}
      </div>
      <div className="w-full rounded-2xl bg-white h-fit dark:bg-dark shadow overflow-hidden pt-3 pb-6">
        {children}
      </div>
    </div>
  )
}

export default ProfileContent