


const Input = ({ label, type, value, handleChange }) => {
    return (
      <div className="flex flex-col  mb-4">
        <label className=" text-gray-600 mb-2 text-start">{label}</label>
        <input
          className="border-b-2 border-b-gray-600 border-transparent
           focus:border-b-gray-600 focus:outline-none rounded-sm w-full
            max-w-xs justify-center bg-transparent text-gray-600"
          type={type}
          required
          value={value} 
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default Input;
  