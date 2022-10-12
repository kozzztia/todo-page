import React from 'react';
import {FormInterface} from "../types/type";
import {Button, Form, Input} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodoForm : React.FC<FormInterface> = ({setTask ,task ,handleFormSubmit} :FormInterface ) => {

    const HandleOnSubmitTodoForm = (e : React.SyntheticEvent<EventTarget> ) : void =>{
        if(task.length>1){
            e.preventDefault()
            handleFormSubmit(e)
        }else{
            e.preventDefault()
            return
        }
    }

    return (
        <Form
            className = "form"
            onFinish={(e)=>{
                HandleOnSubmitTodoForm(e)
            }}>
            <Input
                type = "text"
                placeholder = "insert task"
                onChange={(e)=>{
                    setTask(e.target.value)
                }}
                value ={task}
            />
            <Button
                htmlType="submit"
                type="primary"
                icon={<PlusOutlined />}
            />
        </Form>
    );
};

export default AddTodoForm;
