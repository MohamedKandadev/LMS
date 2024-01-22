'use client'
import React from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'

type Props = {}

const Checkout = (props: Props) => {
  
  const changeContent = () => {

  }
  return (
    <div className='1000px:container font-poppins mx-auto my-20'>
      <div className="flex flex-col text-center">
        <h1 className='text-[40px] max-1000px:text-[30px] font-[600] text-dark dark:text-primary'>Course Checkout</h1>
        <p className='text-[17px] max-1000px:text-[16px] text-gray-500' >We’re on a mission to deliver engaging, curated courses at a reasonable price.</p>
      </div>
      <div className="w-[80%] mx-auto mt-32 flex max-1000px:flex-col gap-5 justify-between">
        <div className="1000px:w-[55%]">
          <h2 className='text-black text-[18px] font-[500] dark:text-primary' >Billing details</h2>
          <form action="" className='mt-10'>
            <Input type='email' label='Email' id='email' onChange={changeContent} placeHolder='edmy@gmail.com' value={''} />
            <Input type='text' label='Card Number' id='email' onChange={changeContent} placeHolder='0000 0000 0000' value={''} />
            <div className="grid grid-cols-2 gap-5">
              <Input type='text' label='Expiry' id='email' onChange={changeContent} placeHolder='MM / YY' value={''} />
              <Input type='text' label='CVC' id='email' onChange={changeContent} placeHolder='CVC' value={''} />
            </div>
            <Button content='Pay now' variante='primary' type='submit' style='rounded-md max-w-[200px]' />
          </form>
        </div>
        <div className="1000px:w-[35%] h-fit py-10 bg-[#f5f7fe] dark:bg-primary-dark rounded-lg">
          <h2 className='px-7 text-dark dark:text-primary font-[500] text-[20px]' >Your order</h2>
          <ul className='mt-5 text-dark  dark:text-primary-gray'>
            <li className='flex justify-between border-b-[1px] dark:border-b-[#352463] py-5'>
              <span className='px-7 font-[400] text-[15px]' >Product</span>
              <span className='px-7 font-[400] text-[15px]' >Subtotal</span>
            </li>
            <li className='flex justify-between border-b-[1px] dark:border-b-[#352463] py-5'>
              <span className='px-7 font-[400] text-[15px]' >Subtotal</span>
              <span className='px-7 font-[400] text-[15px]' >$0.00</span>
            </li>
            <li className='flex justify-between pt-5'>
              <span className='px-7 font-[400] text-[15px]' >Total</span>
              <span className='px-7 font-[400] text-[15px]' >$0.00</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Checkout