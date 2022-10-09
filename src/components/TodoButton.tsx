import React from 'react';
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {TodoButtonInterface} from "../types/type";

const TodoButton = ({delDoneTodo , checkedId , done} : TodoButtonInterface) => {
    return (
        <Button
            disabled={!done}
            onClick={(e)=>{
                e.preventDefault()
                delDoneTodo(checkedId)
            }}
            type="primary"
            icon={<DeleteOutlined />}
        />
    );
};

export default TodoButton;
