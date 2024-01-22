import Button from '@/app/utils/Button'
import Input from '@/app/utils/Input'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

type Props = {
  reviews: any;
}

const Reviews = ({ reviews }: Props) => {
  const changeContent = () => {

  }
  return (
    <>
      <div className="flex flex-col">
        <h3 className='text-[19px] dark:text-primary font-[500] text-black mb-6'>Reviews</h3>
        {
          reviews.map((item: any) => (<div className="flex pt-8 pb-12 border-b-[1px] dark:border-[#2B1C55]" key={item._id}>
            <div className="w-[60px] h-[60px] bg-dark dark:bg-primary rounded-full mr-5 text-white flex justify-center items-center flex-shrink-0">M.K</div>
            <div className="flex flex-col">
              <div className="flex mb-3 items-center">
                <p className='text-black text-[15px] font-[500] mr-1 dark:text-white' >Mohamed Kandad</p> 
                <span className='text-[11px] text-gray-500' >3 Days ago</span>
              </div>
              <p className='text-[15px] text-[#4f547b]' >{ item.review }</p>
            </div>
          </div>))
        }
        
      </div>
      <div className="flex flex-col">
        <h3 className='text-[19px] dark:text-primary font-[500] text-black mb-6'>Write a Review</h3>
        <div className="flex flex-col mb-6">
          <h3 className='text-[15px] dark:text-white font-[400] text-black mb-2'>What is it like to Course?</h3>
          <div className="flex gap-2 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <Input label='Review Content' id='content' onChange={changeContent} placeHolder='Message' as='textarea' value={'sds'} />
        <Button content='Submit Review' variante='primary' type='submit' style='rounded-md max-w-[200px]' />
      </div>
    </>
  )
}

export default Reviews