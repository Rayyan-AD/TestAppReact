import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ userInput, handleDelete, handleEdit }) => {
  return (
    <div className="mt-10 w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="w-1/12 text-start px-6 py-3 font-semibold">Index</th>
            <th className="w-1/3 text-start px-6 py-3 font-semibold">Name</th>
            <th className="w-1/3 text-start px-6 py-3 font-semibold">Age</th>
            <th className="w-1/4 text-start px-6 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userInput.map((item, index) => (
            <tr
              key={index}
              className={`border-b last:border-none ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-200 transition-all duration-200`}
            >
              <td className="text-start px-6 py-3 text-gray-800">{index + 1}</td>
              <td className="text-start px-6 py-3 text-gray-800">{item.name}</td>
              <td className="text-start px-6 py-3 text-gray-800">{item.age}</td>
              <td className="text-start px-6 py-3">
                <div className="flex space-x-3">
                  <FaEdit
                    className="text-blue-500 cursor-pointer hover:text-blue-700 transition-all"
                    onClick={() => handleEdit(index)}
                  />
                  <FaTrash
                    className="text-red-500 cursor-pointer hover:text-red-700 transition-all"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
