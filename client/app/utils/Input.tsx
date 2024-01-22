import React from 'react'

type Props = {
  type?: string;
  label: string;
  placeHolder: string;
  error?: any;
  id: string;
  value: string | number;
  onChange: (event: any) => void;
  touched?: any;
  style?: string;
  disabled?: boolean;
  as?: string;
  hidden?: boolean;
}

const Input = ({ type = 'text', id, label, placeHolder, error, value, onChange, touched, style, disabled, as, hidden }: Props) => {
  return (
    <div className='flex flex-col font-poppins mb-7 w-full'>
      <label htmlFor={id} className={`text-dark mb-1 text-[15px] dark:text-seconde  ${hidden && 'hideen'}`}> { label } </label>
      {
        as === 'textarea' ? <textarea 
          placeholder={placeHolder} 
          value={value} 
          onChange={onChange}
          className={`dark:border-primary-dark bg-transparent dark:text-primary-gray text-[14px] border-[1px] py-4 px-5 rounded-md outline-0 ${style} ${hidden && 'hideen'} resize-none`} 
          cols={30} 
          rows={5}
          id={id} 
        >
          
        </textarea> : <input 
          id={id} 
          type={type} 
          placeholder={placeHolder} 
          className={`dark:border-primary-dark bg-transparent dark:text-primary-gray text-[14px] border-[1px] py-4 px-5 rounded-md outline-0 ${style} ${hidden && 'hideen'}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      }
      {error && touched && (<p className='text-red-600 text-[14px] px-1'>{ error }</p>) }
    </div>
  )
}

export default Input