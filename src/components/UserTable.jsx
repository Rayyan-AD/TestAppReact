import React from 'react'

const UserTable = ({ userInput, handleDelete, handleEdit }) => {
  return (
    <table className="mt-10 w-full max-w-lg mx-auto border-collapse border border-gray-600">
      <thead>
        <tr className="bg-gray-800">
          <th className="w-1/8 text-start text-white px-2 py-2 border border-gray-600">Index</th>
          <th className="w-1/3 text-start text-white px-4 py-2 border border-gray-600">Name</th>
          <th className="w-1/3 text-start text-white px-4 py-2 border border-gray-600">Age</th>
          <th className="w-1/3 text-start text-white px-4 py-2 border border-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userInput.map((item, index) => (
          <tr key={index} className="bg-white">
            <td className="text-start px-2 py-2 text-black border border-gray-600">{index + 1}</td>
            <td className="text-start px-4 py-2 text-black border border-gray-600">{item.name}</td>
            <td className="text-start px-4 py-2 text-black border border-gray-600">{item.age}</td>
            <td className="text-start px-4 py-2 border border-gray-600">
              <div className="flex space-x-3">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
