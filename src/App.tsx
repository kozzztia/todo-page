import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {usersInterface} from "./types/type";
import {createId} from "./support/support";
import TodoApp from "./TodoApp";
import {Button, Divider, Layout} from "antd";
import LoginForm from "./components/LoginForm";
import {users} from "./state";






const App = () => {
    const [isAuth , setIsAus] = useState(false)
    const [usersPersons , setUsersPersons] = useState <usersInterface[]>(users)
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
