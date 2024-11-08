


const Input = ({ label, type, value, handleChange }) => {
    return (
      <div className="flex flex-col items-center mb-4">
        <label className="text-white mb-2 text-center">{label}</label>
        <input
          className="rounded-sm p-2 w-full max-w-xs"
          type={type}
          required
          value={value} 
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default Input;
  