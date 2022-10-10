import React from 'react';
import {List, Typography} from "antd";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";
import TodoTools from "./TodoTools";
import {TodoListInterface} from "../types/type";

const TodoList = ({searchFilteredTodos,searchValue,filterValue,handleCheckValue,delDoneTodo} : TodoListInterface) => {

    return (
        <List
            bordered
            dataSource={searchFilteredTodos(searchValue,filterValue)}
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
    );
};

export default TodoList;
