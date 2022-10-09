import React from 'react';
import {FormInterface} from "../types/type";
import {Button , Input} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodoForm : React.FC<FormInterface> = ({setTask ,task ,handleFormSubmit} :FormInterface ) => {
    return (
        <form
            className = "form"
            onSubmit={(e)=>{
                if(task.length>1){
                    e.preventDefault()
                    handleFormSubmit(e)
                }else{
                    e.preventDefault()
                    return
                }
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
        </form>
    );
};

export default AddTodoForm;
