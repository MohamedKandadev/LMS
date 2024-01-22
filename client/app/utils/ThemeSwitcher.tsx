import React from 'react';
import { useTheme } from 'next-themes';
import  { BiSun, BiMoon } from 'react-icons/bi';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return <div className='flex justify-center items-center'>
    {
      theme === 'light' ? 
        <BiMoon
          className='cursor-pointer'
          fill='black'
          size={25}
          onClick={() => setTheme('dark')}
        /> :
        <BiSun
          className='cursor-pointer'
          size={25}
          onClick={() => setTheme('light')}
        />
    }
  </div>
}

export default ThemeSwitcher;