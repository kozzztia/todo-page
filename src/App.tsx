import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {todoType} from "./types/type";
import {createId} from "./support/support";
import TodoList from "./components/TodoList";
import { Checkbox ,Button ,Input } from 'antd';
import 'antd/dist/antd.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([{id:1,todoTask:"learn",done:true},
        {id:2,todoTask:"learnMore",done:true},{id:3,todoTask:"learn More More...",done:true}])
    function handleForm(e : React.SyntheticEvent<EventTarget>){
            e.preventDefault()
            setTodos([...todos, {id: createId() , todoTask : task , done: false}])
            setTask("")
    }
  return (
        <div className="App">
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Input />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Checkbox/>
            <form className="header"
                onSubmit={(e)=>handleForm(e)}
                >
                <input type="text"
                   placeholder="insert your task"
                   onChange={(e)=>{
                       setTask(e.target.value)
                   }}
                   value={task}
                />
                <button
                    type="submit">
                    add
                </button>
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
