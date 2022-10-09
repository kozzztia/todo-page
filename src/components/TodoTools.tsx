import React from 'react';
import {Button} from "antd";
import TodoCheckbox from "./TodoCheckbox";
import {DeleteOutlined} from "@ant-design/icons";
import {TodoToolsInterface} from "../types/type";
import TodoButton from "./TodoButton"

const TodoTools = ({checkedId ,handleCheckValue , delDoneTodo , done}:TodoToolsInterface)=> {
    return (
        <div>
            <TodoCheckbox
                done={done}
                checkedId={checkedId}
                handleCheckValue={handleCheckValue}
            />
            <TodoButton
                done={done}
                delDoneTodo={delDoneTodo}
                checkedId={checkedId}
            />
        </div>
    );
};

export default TodoTools;
