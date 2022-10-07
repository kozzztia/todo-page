import React, {FC, useCallback, useState} from 'react';
import './App.css';
import {todoType} from "./types/type";
import {createId} from "./support/support";
import FormContainer from "./components/FormContainer"
import TodoList from "./components/TodoList";
import {Button, Checkbox, Form, Input, Rate} from 'antd';
import 'antd/dist/antd.css';


const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([
        {id:1,todoTask:"learn",done:true},
        {id:2,todoTask:"learnMore",done:true},
        {id:3,todoTask:"learn More More...",done:true}
    ])

    const handleFormSubmit=(e : React.SyntheticEvent<EventTarget>):void=>{
            e.preventDefault()
            addTodos()
            setTask("")
    }
    const addTodos = useCallback(() =>{
            setTodos((prev) => [...prev, {id: createId() , todoTask : task , done: false}])
    },[todos])

  return (
        <div className="App">
            <FormContainer
                handleFormSubmit = {handleFormSubmit}
                setTask = {setTask}
            />
            <TodoList
                task={task}
                setTodos={setTodos}
                todos={todos}
            />
        </div>
  );
}

export default App;
