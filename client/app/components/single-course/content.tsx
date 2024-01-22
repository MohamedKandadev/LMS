import Link from 'next/link'
import React from 'react'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

type Props = {
  content: any;
}

const Content = ({ content }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mb-6 flex justify-between">
        <h3 className='text-[19px] dark:text-primary font-[500] text-black'>Course Content</h3>
        <p className='text-[15px] text-[#4f547b]'>{ content.length }</p>
      </div>
      <ul className='text-[#4f547b] flex flex-col gap-y-5'>
        {
          content.map((item: any) => <li className='flex items-center justify-between' key={item._id}>
            <div className="flex items-center ">
              <span className='mr-1'><MdOutlineSlowMotionVideo /></span>
              <p className='text-[15px]' >{item.title}</p>
            </div>
            <Link href='#' className='text-primary underline'>Preview</Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Content