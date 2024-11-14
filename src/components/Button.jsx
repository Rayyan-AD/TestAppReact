import React from 'react'

const Button = ({handleAddUser, children}) => {
  return (
    <button
          className="bg-blue-600 text-white mt-6 rounded max-h-24 px-2 py-1 justify-center items-center"
          onClick={()=>handleAddUser()}>
          {children}
    </button>
  )
}

export default Button