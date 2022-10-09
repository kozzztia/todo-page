import React, {useEffect, useState} from 'react';
import {List, Typography} from "antd";
import {TodoListContainerInterface, todoType} from "../types/type";
import TodoButton from "./TodoButton";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo , filterValue}:TodoListContainerInterface) => {
    // const [newTodos , setNewTodos] = useState(todos)
    //
    // useEffect(():void=>{
    //     switch (filterValue) {
    //         case 1:
    //             setNewTodos(todos.filter(item => item.done === true));
    //             break;
    //         case 2:
    //             setNewTodos(todos.filter(item => item.done === false));
    //             break;
    //         case 3:
    //             setNewTodos(todos);
    //             break;
    //         default:
    //             return
    //     }
    // },[filterValue])

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
