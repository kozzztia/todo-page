import React, {FC, useState} from 'react';

import './App.css';
import 'antd/dist/antd.css';

import {todoType} from "./types/type";
import {createId} from "./support/support";

import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm"
import FilterForm from "./components/FilterForm";
import {Button, Checkbox, Divider, List, Typography} from "antd";


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

  // @ts-ignore
    // @ts-ignore
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
                filterValue = {filterValue}
                setFilterValue = {setFilterValue}
            />

            {/*<TodoList*/}
            {/*    task={task}*/}
            {/*    setTodos={setTodos}*/}
            {/*    todos={todos}*/}
            {/*/>*/}
            <Divider orientation="center">TodoList</Divider>
            <List
                bordered
                dataSource={todos}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text>{item.id} : {item.todoTask}
                        </Typography.Text> <Checkbox/> <Button type="primary">del</Button>

                    </List.Item>
                )}
            />
        </div>
  );
}

export default App;
