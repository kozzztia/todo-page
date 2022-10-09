import React, {FC,useState} from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {todoType} from "./types/type";
import {createId} from "./support/support";

import AddTodoForm from "./components/AddTodoForm"
import TodoListContainer from "./components/TodoListContainer";
import SearchForm from "./components/SearchForm"
import FilterForm from "./components/FilterForm";
import {Divider} from "antd";


const  App:FC = () => {
    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([
        {id:1,todoTask:"one",done:false},
        {id:2,todoTask:"one2",done:false},
        {id:3,todoTask:"one3",done:false},
        {id:4,todoTask:"one4",done:false},
    ])
    const [searchValue, setSearchValue] = useState<string>("")
    const [filterValue , setFilterValue] = useState<number>(3)


    const handleFormSubmit=(e : React.SyntheticEvent<EventTarget>):void=>{
            e.preventDefault()
            setTodos((prev) =>
                [...prev, {id: createId() , todoTask : task , done: false}]
            )
            setTask("")
    }

    const handleCheckValue =(todosId:number):void =>{
        setTodos((prev) =>
            prev.map(item => item.id === todosId?{
                id : item.id ,
                todoTask : item.todoTask ,
                done: !item.done}
                :
                item)
        )
    }
    const delDoneTodo = (todosId : number) => {
        setTodos((prev) =>
            prev.filter(item => item.id !== todosId)
        )
        // console.log(todosId)
    }

    return (
        <div className="App">
            <Divider orientation="center">Add new todo or find older</Divider>
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
                filterValue = {filterValue}
                setFilterValue = {setFilterValue}
            />
            <Divider orientation="center">TodoList</Divider>
            <TodoListContainer
                todos={todos}
                handleCheckValue={handleCheckValue}
                delDoneTodo={delDoneTodo}
            />
        </div>
  );
}

export default App;
