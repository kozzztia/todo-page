import React from 'react';
import {Checkbox} from "antd";
import {TodoCheckboxInterface} from "../types/type";

const TodoCheckbox = ({checkedId , handleCheckValue , done}:TodoCheckboxInterface) => {
    return (
        <>
            <Checkbox
                checked={done}
                style={{paddingRight: "30px"}}
                onChange={()=>{
                    handleCheckValue(checkedId)
                }}
            />
        </>
    );
};

export default TodoCheckbox;
