import React from 'react';
import {Button} from "antd";
import TodoCheckbox from "./TodoCheckbox";
import {DeleteOutlined} from "@ant-design/icons";
import {TodoButtonInterface} from "../types/type";


const TodoButton = ({checkedId ,handleCheckValue , delDoneTodo}:TodoButtonInterface)=> {
    return (
        <div>
            <TodoCheckbox
                checkedId={checkedId}
                handleCheckValue={handleCheckValue}
            />
            <Button
                onMouseUp={(e)=>{
                    e.preventDefault()
                    delDoneTodo(checkedId)
                }}
                type="primary"
                icon={<DeleteOutlined />}
            />
        </div>
    );
};

export default TodoButton;
