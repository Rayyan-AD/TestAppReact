import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import UserTable from "./components/UserTable";
import Landing from "./components/Landing";
import { AiOutlineArrowLeft } from "react-icons/ai"; 

function App() {
  const [userInput, setUserInput] = useState([]); 
  const [currentInput, setCurrentInput] = useState({ name: "", age: "" }); 
  const [editIndex, setEditIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (field, value) => {
    setCurrentInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddUser = () => {
    if (!currentInput.name || !currentInput.age) {
      setError('Please enter a valid name and age!');
      return;
    }

    if (currentInput.age < 0) {
      setError('Age cannot be negative!');
      return;
    }

    setError('');
    
    if (editIndex !== null) {
      setUserInput((prev) =>
        prev.map((user, i) =>
          i === editIndex ? currentInput : user
        )
      );
      setCurrentInput({ name: "", age: "" });
    } else {
      setUserInput((prev) => [...prev, currentInput]);
      setCurrentInput({ name: "", age: "" });
    }
    
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    setUserInput((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setCurrentInput(userInput[index]);
  };

  const handleIsClicked = () => {
    setIsClicked(true);
  };

  const handleBackToLanding = () => {
    setIsClicked(false); 
  };

  return (
    <>
      {isClicked ? (
        <div className="flex flex-col relative">
          <button
            onClick={handleBackToLanding}
            className="absolute top-5 left-5 bg-transparent text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition-all"
          >
            <AiOutlineArrowLeft />
          </button>
          
          <div className="flex flex-col bg-white items-center text-center justify-center m-auto w-96 p-6 rounded my-10 shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
            <Header />
            {error && <p className="text-red-600">{error}</p>}
            <Input
              label="Name"
              type="text"
              value={currentInput.name}
              handleChange={(e) => handleChange("name", e.target.value)}  
            />
            <Input
              label="Age"
              type="number"
              value={currentInput.age}
              handleChange={(e) => handleChange("age", e.target.value)}
            />
            <Button handleAddUser={handleAddUser}>
              {editIndex === null ? "Add User" : "Update"}
            </Button>
          </div>
          <div className="">
            {userInput.length > 0 ? (
              <UserTable
                userInput={userInput}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ) : null}
          </div>
        </div> 
      ) : (
        <Landing handleIsClicked={handleIsClicked} />
      )}
    </>
  );
}

export default App;
