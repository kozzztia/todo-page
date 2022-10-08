import React, {FC, useCallback, useEffect, useState} from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {todoType} from "./types/type";
import {createId} from "./support/support";

import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm"
import FilterForm from "./components/FilterForm";


const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([
    ])
    const [searchValue, setSearchValue] = useState("")


    const handleFormSubmit=(e : React.SyntheticEvent<EventTarget>):void=>{
            e.preventDefault()
            setTodos((prev) => [...prev, {id: createId() , todoTask : task , done: false}])
            setTask("")
    }

  return (
        <div className="App">
            <AddTodoForm
                setTask = {setTask}
                task = {task}
                handleFormSubmit = {handleFormSubmit}
            />
            <SearchForm
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />
            <FilterForm

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
