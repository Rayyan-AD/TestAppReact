


const Input = ({ label, type, value, handleChange }) => {
    return (
      <div className="flex flex-col  mb-4">
        <label className=" text-black mb-2 text-start">{label}</label>
        <input
          className="border-b-2 border-b-black border-transparent
           focus:border-b-black focus:outline-none rounded-sm w-full
            max-w-xs justify-center bg-transparent text-white"
          type={type}
          required
          value={value} 
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default Input;
  