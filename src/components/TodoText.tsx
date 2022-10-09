import React from 'react';
import {todoType} from "../types/type";


const TodoText = ({id,todoTask , done}:todoType) => {
    return (
        <p>
            {id} : {todoTask}
        </p>
    );
};

export default TodoText;
