import React, {useEffect, useState} from 'react';
import {List, Typography} from "antd";
import {TodoListContainerInterface} from "../types/type";
import TodoTools from "./TodoTools";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo , filterValue}:TodoListContainerInterface) => {

    const [filter ,setFilter] = useState<string>("all")

    const filteredTodos = (filterArg : string) =>{
        if(filterArg === "done"){
            return todos.filter(item => item.done === true)
        }else if(filterArg === "notDone"){
            return todos.filter(item => item.done === false)
        }else{
            return todos
        }
    }
    useEffect(()=>{
        switch (filterValue) {
            case "done" :setFilter(filterValue);break;
            case "notDone": setFilter(filterValue);break;
            case "all": setFilter(filterValue);break;
            default : return
        }
    },[filterValue])

    return (
        <>
            <List
                bordered
                dataSource={filteredTodos(filter)}
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
