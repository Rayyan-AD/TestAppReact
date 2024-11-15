import React from 'react'

const Button = ({handleAddUser, children}) => {
  return (
    <button
      className="bg-green-500 text-white mt-6 rounded-3xl w-full max-w-lg px-8 py-3 text-lg justify-center items-center"
      onClick={() => handleAddUser()}
    >
  {children}
  </button>

  )
}

export default Button