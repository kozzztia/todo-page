import React from 'react';
import {Button, Divider, Form, Input} from 'antd';
import { LoginFormInterface} from "../types/type";



const LoginForm = ({users , setIsAus} : LoginFormInterface) => {
    const [logUserName , setLogUserName] = React.useState<string>("")
    const [logPassword , setLogPassword] = React.useState<string>("")

    const setAuthAndSetCorrect = (value :  boolean)=>[
        setIsAus(value),
    ]

    const LoginFormSubmit = ()=>{
        users.map((item) =>
            item.nikName === logUserName && item.password === logPassword &&
                setAuthAndSetCorrect(true)
        )
    }


    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
                onFinish={(e)=>LoginFormSubmit()}

            >

                <Divider orientation="center">Login</Divider>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        placeholder="1"
                        onChange={(e)=>{
                            setLogUserName(e.target.value)
                        }}
                        value = {logUserName}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        placeholder="1"
                        onChange={(e)=>{
                            setLogPassword(e.target.value)
                        }}
                        value = {logPassword}
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary"
                            htmlType="submit">
                        submit
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default LoginForm;
