import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import TodoApp from "./TodoApp";
import {Button, Divider, Layout} from "antd";
import LoginForm from "./components/LoginForm";
import {users} from "./state";






const App = () => {
    const [isAuth , setIsAus] = useState(false)
    return (
        <Layout className="App">
            <Divider orientation="center">TodoList</Divider>
            <Button
                type="primary"
                onClick={()=>{setIsAus(false)}}
            >
                {isAuth?<>Logout</>:<>Login</>}</Button>
                {isAuth?
                    <TodoApp/>
                    :
                    <LoginForm
                        users={users}
                        setIsAus={setIsAus}
                    />}

        </Layout>
    );
};

export default App;
