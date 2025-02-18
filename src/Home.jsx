import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
        <a href='/game' className='border border-gray-300 bg-gray-100 font-semibold px-4 py-2 rounded-md'>GAME</a>
        <a href='/color' className='border border-gray-300 bg-gray-100 font-semibold px-4 py-2 rounded-md'>COLOUR THERAPY</a>
    </div>
  )
}

export default Home