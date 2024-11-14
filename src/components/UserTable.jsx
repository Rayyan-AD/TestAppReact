import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ userInput, handleDelete, handleEdit }) => {
  return (
    <table className="mt-10 w-full max-w-lg mx-auto border-collapse mb-10 rounded">
      <thead>
        <tr className="bg-gray-800 border-b border-gray-600">
          <th className="w-1/8 text-start text-white px-2 py-2">Index</th>
          <th className="w-1/3 text-start text-white px-4 py-2">Name</th>
          <th className="w-1/3 text-start text-white px-4 py-2">Age</th>
          <th className="w-1/3 text-start text-white px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userInput.map((item, index) => (
          <tr key={index} className="border-b border-gray-300 bg-white">
            <td className="text-start px-2 py-2 text-black">{index + 1}</td>
            <td className="text-start px-4 py-2 text-black">{item.name}</td>
            <td className="text-start px-4 py-2 text-black">{item.age}</td>
            <td className="text-start px-4 py-2">
              <div className="flex space-x-3">
              <FaEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(index)}  
                />
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(index)}  
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
