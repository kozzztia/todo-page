import React from 'react';
import {todoType} from "../types/type";
import {NavLink} from "react-router-dom";


const TodoText = ({id,todoTask}:todoType) => {
    return (
        <p>
            {id} :
            <NavLink
                to={`/${id}`}>
                {todoTask}
            </NavLink>

        </p>
    );
};

export default TodoText;
