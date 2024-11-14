import React from 'react'

const Landing = ({handleIsClicked}) => {
  return (
    <div className='w-full bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col gap-10 items-center justify-center text-center'>
        <h1 className=' text-[40px] text-white font-bold'>Bio Data Form</h1>
        <button className='bg-red-600 text-white px-4 py-2 rounded mx-2' onClick={handleIsClicked}>Get Started</button>
    </div>

  )
}

export default Landing