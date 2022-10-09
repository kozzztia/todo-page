import React, {useEffect, useState} from 'react';
import {List, Typography} from "antd";
import {TodoListContainerInterface, todoType} from "../types/type";
import TodoTools from "./TodoTools";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo , filterValue}:TodoListContainerInterface) => {


    return (
        <>
            <List
                bordered
                dataSource={todos}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text>
                            <TodoText
                                id={item.id}
                                todoTask={item.todoTask}
                                done={item.done}
                            />
                        </Typography.Text>
                        <WorkStatus
                            done={item.done}
                        />
                            <TodoTools
                                done={item.done}
                                checkedId={item.id}
                                handleCheckValue={handleCheckValue}
                                delDoneTodo={delDoneTodo}
                            />
                    </List.Item>
                )}
            />
        </>
    );
};

export default TodoListContainer;
