import React, { useRef } from "react";
import "./styles.css";


interface Props{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAddTasks:(e:React.FormEvent)=>void;
}
const InputField = ({todo, setTodo, handleAddTasks}: Props) => {




    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e)=>{handleAddTasks(e);
    inputRef.current?.blur();}}>
      <input type="input" placeholder="enter your task" className="input_box" value={todo} 
      onChange={(e)=>setTodo(e.target.value)}
      ref={inputRef}/>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
