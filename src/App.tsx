import React, {FC, useCallback, useState} from 'react';
import './App.css';
import {todoType} from "./types/type";
import {createId} from "./support/support";
import TodoList from "./components/TodoList";
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([
        {id:1,todoTask:"learn",done:true},
        {id:2,todoTask:"learnMore",done:true},
        {id:3,todoTask:"learn More More...",done:true}
    ])

    const handleFormSubmit=(e : React.SyntheticEvent<EventTarget>)=>{
            e.preventDefault()
            addTodos()
            setTask("")
    }
    const addTodos = useCallback(():void=>{
            setTodos((prev) => [...prev, {id: createId() , todoTask : task , done: false}])
    },[todos])

  return (
        <div className="App">
            <form className="header"
                onSubmit={(e)=>handleFormSubmit(e)}
                >
                <Input type="text"
                   placeholder="insert your task"
                   onChange={(e)=>{
                       setTask(e.target.value)
                   }}
                   value={task}
                />
                <Button htmlType="submit" type="primary">
                    add

                </Button>
            </form>
            <TodoList
                task={task}
                setTodos={setTodos}
                todos={todos}
            />
        </div>
  );
}

export default App;
