import React, {useState} from 'react';
import {todoItemType} from "../types/type";
import TodoText from "./TodoText";
import {Checkbox, Input , Button} from "antd";

const TodoItem = ({todos, setTodos ,task ,item , keys}:todoItemType) => {
    return (
        <li key={keys}>
            {item.id + ':'}
            <TodoText
                text ={item.todoTask}
                setTodos={setTodos}
                todos={todos}
                id={item.id}
            />
            <Checkbox
                onChange={()=>{
                    setTodos(todos.map(todo => todo.id===item.id?
                        {id:item.id , todoTask: item.todoTask , done : !item.done}
                        : todo))
                }}
            />

            <Button
                disabled = {task === item.todoTask || !item.done}
                onClick={()=>{
                    setTodos(todos.filter(filteredItem => filteredItem.id !== item.id))
                }}
            >X</Button>
        </li>
    );
};

export default TodoItem;
