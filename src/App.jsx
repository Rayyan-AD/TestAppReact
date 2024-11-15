import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import UserTable from "./components/UserTable";
import Landing from "./components/Landing";
import { AiOutlineArrowLeft } from "react-icons/ai";

function App() {
  const [userInput, setUserInput] = useState([]);
  const [currentInput, setCurrentInput] = useState({ name: "", age: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState("landing"); 
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setCurrentInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddUser = () => {
    if (!currentInput.name || !currentInput.age) {
      setError("Please enter a valid name and age!");
      return;
    }

    if (currentInput.age < 0) {
      setError("Age cannot be negative!");
      return;
    }

    setError("");

    if (editIndex !== null) {
      setUserInput((prev) =>
        prev.map((user, i) => (i === editIndex ? currentInput : user))
      );
    } else {
      setUserInput((prev) => [...prev, currentInput]);
    }

    setCurrentInput({ name: "", age: "" });
    setEditIndex(null);

    
    setCurrentPage("viewTable");
  };

  const handleDelete = (index) => {
    setUserInput((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setCurrentInput(userInput[index]);
    setCurrentPage("inputForm"); 
  };

  const navigateTo = (page) => setCurrentPage(page); 

  return (
    <>
      {currentPage === "landing" && (
        <Landing handleIsClicked={() => navigateTo("inputForm")} />
      )}

      {(currentPage === "inputForm" || currentPage === "viewTable") && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 relative">
          <button
            onClick={() => navigateTo("landing")}
            className="absolute top-5 left-5 bg-transparent text-white text-2xl p-2 rounded-full hover:bg-white/20 transition-all"
          >
            <AiOutlineArrowLeft />
          </button>

          {currentPage === "inputForm" && (
            <div className="flex flex-col bg-white items-center text-center justify-center w-96 py-12 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all ease-in-out duration-300 border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Bio Form</h1>
              {error && <p className="text-red-600 mb-4">{error}</p>}
              <div className="w-full mt-4">
                <Input
                  label="Name"
                  type="text"
                  value={currentInput.name}
                  handleChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="w-full mt-4">
                <Input
                  label="Age"
                  type="number"
                  value={currentInput.age}
                  handleChange={(e) => handleChange("age", e.target.value)}
                />
              </div>
              <div className="w-full mt-6">
                <Button handleAddUser={handleAddUser}>
                  {editIndex === null ? "Add User" : "Update"}
                </Button>
              </div>
            </div>
          )}

          {currentPage === "viewTable" && (
            <div className="w-full max-w-4xl mt-8">
              <UserTable
                userInput={userInput}
                handleDelete={handleDelete}
                handleEdit={handleEdit} 
              />
            </div>
          )}

        
          {currentPage === "viewTable" && (
            <div className="mt-6">
              <Button handleAddUser={() => navigateTo("inputForm")}>
                Add New User
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
