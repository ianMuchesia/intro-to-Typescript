import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./Model";
import TodoList from "./components/TodoList" 
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTasks = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}])
    }
    setTodo("")
  };

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddTasks={handleAddTasks}
      />
      <TodoList todos={todos} setTodos={setTodos}/>
     
    </div>
  );
};

export default App;
