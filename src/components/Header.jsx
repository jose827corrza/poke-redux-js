import React, { useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        console.log('activated dark mode');
        setDarkMode(!darkMode);
      } else {
        document.documentElement.classList.remove('dark')
        console.log('Deactivated dark mode');
        setDarkMode(!darkMode);
      }
    }

  return (
    <div className='fixed w-full h-12 py-1 backdrop-blur-sm bg-cyan/30 border-1 bg-slate-400 dark:bg-slate-600'>
        <ul className='flex items-center justify-between px-4'>
            <a to='inicio'></a>
            <a to='inicio'>
                <div className='text-3xl font-extrabold'>
                    <span className='bg-clip-text font-splineSans text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        Pokedux
                    </span>
                </div>
            </a>
            <button onClick={toggleDarkMode} className='pt-2'>
                {darkMode ? <BsMoonFill size={24} color={'#134874'}/> : <BsSunFill size={24} color={'#DFBF0D'}/>}
            </button>
        </ul>
    </div>
  )
}
