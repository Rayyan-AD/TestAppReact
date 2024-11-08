import React from 'react'

const Button = ({handleAddUser, children}) => {
  return (
    <button
          className="bg-blue-500 text-white p-2 mt-4 rounded"
          onClick={()=>handleAddUser()}>
          {children}
    </button>
  )
}

export default Button