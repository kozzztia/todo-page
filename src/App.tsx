import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {usersInterface} from "./types/type";
import {createId} from "./support/support";
import TodoApp from "./TodoApp";

const users : usersInterface[] = [
    {nikName : "kozzztia" , password : '12345' , isAuth: false , id:createId()},
    {nikName : "admin" , password : '123456' , isAuth: false , id:createId()},
    {nikName : "user" , password : '1234567' , isAuth: false , id:createId()},
]



const App = () => {
    return (
        <div className="App">
            <TodoApp/>
        </div>
    );
};

export default App;
