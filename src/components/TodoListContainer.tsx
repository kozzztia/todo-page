import React from 'react';
import {List, Typography} from "antd";
import {TodoListContainerInterface} from "../types/type";
import TodoButton from "./TodoButton";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo}:TodoListContainerInterface) => {
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
                            <TodoButton
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
