import React from 'react'

const Landing = ({handleIsClicked}) => {
  return (
    <div className='w-full h-screen bg-[url(hp-black.jpg)] bg-cover bg-center flex items-center justify-center text-center'>
        <button className='bg-red-600 text-white px-4 py-2 rounded' onClick={handleIsClicked}>Get Started</button>
    </div>

  )
}

export default Landing