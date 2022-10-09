import React, {useEffect} from 'react';
import {Checkbox} from "antd";
import {TodoCheckboxInterface} from "../types/type";

const TodoCheckbox = ({checkedId , handleCheckValue}:TodoCheckboxInterface) => {
    return (
        <>
            <Checkbox
                style={{paddingRight: "10px"}}
                onChange={()=>{
                    handleCheckValue(checkedId)
                }}
            />
        </>
    );
};

export default TodoCheckbox;
