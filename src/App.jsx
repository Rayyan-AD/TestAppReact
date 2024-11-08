import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import UserTable from "./components/UserTable";
import Landing from "./components/Landing";

function App() {
  const [userInput, setUserInput] = useState([]); 
  const [currentInput, setCurrentInput] = useState({ name: "", age: "" }); 
  const [editIndex, setEditIndex] = useState(null)
  const [isClicked, setIsClicked] = useState(false)

  
  const handleChange = (field, value) => {
    setCurrentInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  
  const handleAddUser = () => {
    if (currentInput.name && currentInput.age) {
      if(editIndex!== null){
        setUserInput((prev)=>(
          prev.map((user, i)=>(
            i === editIndex ? currentInput : user
          ))
        ))
        setCurrentInput({ name: "", age: "" })
      }
      else
      {
      setUserInput((prev) => [...prev, currentInput]);
      setCurrentInput({ name: "", age: "" }); 
      }
      setEditIndex(null)
    }
  };
  const handleDelete = (index)=>{
    setUserInput((prev)=>prev.filter((_,i)=>(
      i!==index
    )))
    
  }
  console.log(userInput)
  const handleEdit = (index)=>{
   setEditIndex(index)
   setCurrentInput(userInput[index])
  }

  const handleIsClicked = ()=> {
    setIsClicked(true)
  }

  return (
    <>
      {isClicked ?
      <div className=" bg-transparent text-center justify-center m-auto w-96 p-4 mt-20 rounded-sm">
        <Header />
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
        <Button handleAddUser={handleAddUser}>{editIndex === null? "Add User": "Save" }</Button>
        {userInput.length > 0 ? <UserTable userInput={userInput} handleDelete={handleDelete} handleEdit={handleEdit}/> : null }
      </div> 
      :
      <Landing handleIsClicked={handleIsClicked}/>
}
      
    </>
  );
}

export default App;
