import React from 'react';
import {Button, Checkbox, Divider, Form, Input} from 'antd';

const LoginForm = () => {
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={(e)=>console.log(e)}
                autoComplete="off"
            >
                <Divider orientation="center">Login</Divider>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary"
                            htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default LoginForm;
