import React from 'react';
import {List, Typography} from "antd";
import {handleCheckValueType, TodoListContainerInterface} from "../types/type";
import TodoButton from "./TodoButton";
import TodoText from "./TodoText";

const TodoListContainer = ({todos ,handleCheckValue}:TodoListContainerInterface) => {
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
                            <TodoButton
                                checkedId={item.id}
                                handleCheckValue={handleCheckValue}
                            />
                    </List.Item>
                )}
            />
        </>
    );
};

export default TodoListContainer;
