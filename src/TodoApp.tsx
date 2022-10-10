import React, {FC , useState} from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {todoType} from "./types/type";
import {createId} from "./support/support";
import {Divider} from "antd";
import AddTodoForm from "./components/AddTodoForm"
import TodoListContainer from "./components/TodoListContainer";
import SearchForm from "./components/SearchForm"
import FilterForm from "./components/FilterForm";



const  TodoApp:FC = () => {
    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([
        {id:1,todoTask:"one",done:false},
        {id:2,todoTask:"two",done:false},
        {id:3,todoTask:"three",done:false},
        {id:4,todoTask:"four",done:false},
    ])
    const [searchValue, setSearchValue] = useState<string>("")
    const [filterValue , setFilterValue] = useState<string>('all')



    const handleFormSubmit=(e : React.SyntheticEvent<EventTarget>):void=>{
            e.preventDefault()
            setTodos((prev) =>
                [...prev, {id: createId() , todoTask : task , done: false}]
            )
            setTask("")
    }



    const handleCheckValue =(todosId:number):void =>{
        setTodos(todos.map(item => item.id === todosId?
            {id : item.id , todoTask : item.todoTask , done: !item.done}
            : item)
        )
    }
    const delDoneTodo = (deleteTodosId : number):void=> {
        setTodos( todos.filter(item => item.id !== deleteTodosId)
        )
    }

    return (
        <div className="TodoApp">
            <Divider orientation="center">Add new todo or find</Divider>
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
            <Divider orientation="center">TodoList   : {todos.length}</Divider>
            <TodoListContainer
                filterValue={filterValue}
                todos={todos}
                handleCheckValue={handleCheckValue}
                delDoneTodo={delDoneTodo}
                searchValue={searchValue}
            />
        </div>
  );
}

export default TodoApp;