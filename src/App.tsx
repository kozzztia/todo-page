import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {usersInterface} from "./types/type";
import {createId} from "./support/support";
import TodoApp from "./TodoApp";
import {Button , Layout} from "antd";
import LoginForm from "./components/LoginForm";

const users : usersInterface[] = [
    {nikName : "kozzztia" , password : '12345' , isAuth: false , id:createId()},
    {nikName : "admin" , password : '123456' , isAuth: false , id:createId()},
    {nikName : "user" , password : '1234567' , isAuth: false , id:createId()},
]



const App = () => {
    const [isAuth , setIsAus] = useState(false)
    return (
        <Layout className="App">
            <Button
                type="primary"
                onClick={()=>{setIsAus(prev=>!prev)}}
            >
                {isAuth?<>Login</>:<>Logout</>}</Button>
                {isAuth?<TodoApp/>:<LoginForm/>}

        </Layout>
    );
};

export default App;
