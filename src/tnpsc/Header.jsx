import React from 'react'

function Header() {
  return (
    <div className=' flex py-2 justify-evenly items-center bg-purple-500 shadow-xl '>
        <p className='cursor-pointer bg-purple-800 hover:bg-white hover:text-purple-800 px-4 py-2 text-white font-bold rounded-md shadow-xl '>SYLABUS</p>
        <p className='cursor-pointer bg-purple-800 hover:bg-white hover:text-purple-800 px-4 py-2 text-white font-bold rounded-md shadow-xl '>TEST</p>
        <p className='cursor-pointer bg-purple-800 hover:bg-white hover:text-purple-800 px-4 py-2 text-white font-bold rounded-md shadow-xl '>RESULT</p>
        <p className='cursor-pointer bg-purple-800 hover:bg-white hover:text-purple-800 px-4 py-2 text-white font-bold rounded-md shadow-xl '>HISTORY</p>
    </div>
  )
}

export default Header