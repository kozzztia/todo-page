import React from 'react';

import {TodoListContainerInterface, todoType} from "../types/type";
import TodoList from "./TodoList";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo , filterValue ,searchValue}:TodoListContainerInterface) => {

    const filteredTodos = (filterArg : string) =>{
        if(filterArg === "done"){
            return todos.filter(item => item.done)
        }else if(filterArg === "notDone"){
            return todos.filter(item => !item.done)
        }else{
            return todos
        }
    }

    const searchFilteredTodos = (searchArg : string, filterArgs : string):todoType[] | [] =>{
            if(searchValue.length >= 1){
                return filteredTodos(filterArgs).filter(item => item.todoTask.includes(searchArg))
            }else{
                return filteredTodos(filterArgs)
            }
    }

    return (
        <>
            <TodoList
                searchFilteredTodos = {searchFilteredTodos}
                searchValue ={searchValue}
                filterValue ={filterValue}
                handleCheckValue = {handleCheckValue}
                delDoneTodo = {delDoneTodo}
            />
        </>
    );
};

export default TodoListContainer;
