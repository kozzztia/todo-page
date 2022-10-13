import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {OneTodoType} from "../types/type";
import {Layout, List} from "antd";
import {Typography} from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";

const { Title } = Typography;

const TodoPage = ({id , todoTask , done}:OneTodoType) => {
    const location = useLocation()
    return (
        <List
            bordered
        >
            <Title>{todoTask}</Title>
                <p> {id} : some text</p>
                <p>{done? "You finished that task" : "This task do not finished"  }</p>
            <NavLink
                to="/">
                back
            </NavLink>
        </List>
    );
};

export default TodoPage;
