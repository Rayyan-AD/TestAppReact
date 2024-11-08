/* eslint-disable react/prop-types */
import React from 'react'

const UserTable = ({userInput, handleDelete, handleEdit}) => {
  return (
    <table className="mt-10 w-full spa">
  <thead>
    <tr>
      <th className="w-1/2 text-start text-red-600">Name</th>
      <th className="w-1/2 text-start text-red-600">Age</th>
    </tr>
  </thead>
  <tbody>
    {userInput.map((item, index)=>(
        <tr key={index}>
            <td className='text-start text-white'>{item.name}</td>
            <td className='text-start text-white'>{item.age}</td>
            <div className='flex space-x-5 text-white'>
            <button className='bg-blue-400 rounded px-2' onClick={()=>handleEdit(index)}>Edit</button>
            <button className='bg-red-400 w-full rounded px-2' onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        </tr>
    ))}
  </tbody>
</table>

  )
}

export default UserTable