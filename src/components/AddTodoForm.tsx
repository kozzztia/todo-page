import React from 'react';
import {FormInterface} from "../types/type";
import {Button , Input} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodoForm : React.FC<FormInterface> = ({setTask ,task ,handleFormSubmit} :FormInterface ) => {
    return (
        <form
            className = "form"
            onSubmit={(e)=>{
                e.preventDefault()
                handleFormSubmit(e)
            }}
        >
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
            >
                add
            </Button>
        </form>
    );
};

export default AddTodoForm;
