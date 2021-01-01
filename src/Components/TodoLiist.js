import React,{useState} from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux";


 const Todoliist = () => {
     const list=useSelector((state)=>state.todos);
     
 


    return (
       
        <div>
           {
            list.map(el=><Todo key={el.id} el={el}/>)
           }
        </div>
   
    )
}
export default Todoliist; 