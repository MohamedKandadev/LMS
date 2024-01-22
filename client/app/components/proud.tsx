import React from 'react'

type Props = {}

const Proud = (props: Props) => {
  return (
    <div className='w-full bg-[#b4c5da] dark:bg-primary-dark py-32'>
      <div className='relative m-auto w-[70%] max-1300px:w-[95%] max-1500px:w-[85%] font-poppins text-center'>
        <h2 className='text-[32px] text-black dark:text-primary font-[600] mb-3'>We are Proud</h2>
        <p className='text-[14px] text-gray-600 w-[90%] max-w-[700px] m-auto'>Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master’s level degrees.</p>
        <div className="grid grid-cols-4 max-1000px:grid-cols-2 gap-10 mt-20">
          <div className="flex flex-col">
            <h4 className='text-[36px] text-primary font-[600]'>350,000+</h4>
            <p className='text-[14px] text-gray-600'>Students worldwide</p>
          </div>
          <div className="flex flex-col">
            <h4 className='text-[36px] text-primary font-[600]'>496,000+</h4>
            <p className='text-[14px] text-gray-600'>Total course views</p>
          </div>
          <div className="flex flex-col">
            <h4 className='text-[36px] text-primary font-[600]'>19,000+</h4>
            <p className='text-[14px] text-gray-600'>Five-star course reviews</p>
          </div>
          <div className="flex flex-col">
            <h4 className='text-[36px] text-primary font-[600]'>987,000+</h4>
            <p className='text-[14px] text-gray-600'>Students community</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proud