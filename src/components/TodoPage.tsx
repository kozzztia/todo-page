import React from 'react';
import {NavLink} from "react-router-dom";
import {OneTodoType} from "../types/type";
import {Divider, List} from "antd";
import {CheckOutlined, StopOutlined , CaretLeftOutlined} from "@ant-design/icons";


const TodoPage = ({id , todoTask , done}:OneTodoType) => {
    return (
        <List
            bordered

        >
            <Divider orientation="right">Task : {todoTask} {done?
                <CheckOutlined style={{color:"green"}}/>:<StopOutlined style={{color:"red"}}/>}</Divider>
                <p> {id} : "Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."</p>
                <h2>{done? "You finished that task" : "This task do not finished"  }</h2>
            <Divider orientation="left">
                <NavLink
                    to="/">
                    <CaretLeftOutlined />
                     back
                </NavLink>
            </Divider>
        </List>
    );
};

export default TodoPage;
