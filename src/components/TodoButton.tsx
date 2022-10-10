import React from 'react';
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {TodoButtonInterface} from "../types/type";

const TodoButton = ({delDoneTodo , checkedId , done} : TodoButtonInterface) => {

    const handleDelDoneTodo = (e : React.SyntheticEvent<EventTarget>) : void =>{
        e.preventDefault()
        delDoneTodo(checkedId)
    }

    return (
        <Button
            disabled={!done}
            onClick={(e)=>handleDelDoneTodo(e)}
            type="primary"
            icon={<DeleteOutlined />}
        />
    );
};

export default TodoButton;
