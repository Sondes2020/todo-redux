import React,{useState} from "react"
import AddTodo from "./Components/AddToDo";
import Todolist from "./Components/TodoLiist";
import "./App.css"; 
const App=()=>{

 

  return (
    <div className="App">
     <h1> TO-DO-Redux</h1>
      <AddTodo />
     
      <Todolist />
      
    </div>
  )
  }
export default App; 


