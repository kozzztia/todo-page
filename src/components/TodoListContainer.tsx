import React, {useEffect, useState} from 'react';
import {List, Typography} from "antd";
import {TodoListContainerInterface} from "../types/type";
import TodoTools from "./TodoTools";
import TodoText from "./TodoText";
import WorkStatus from "./WorkStatus";

const TodoListContainer = ({todos ,handleCheckValue , delDoneTodo , filterValue ,searchValue}:TodoListContainerInterface) => {

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
    const searchFilteredTodos = (searchArg : string, filterArgs : string) =>{
            if(searchValue.length >= 1){
                return filteredTodos(filterArgs).filter(item => item.todoTask.includes(searchArg))
            }else{
                return filteredTodos(filterArgs)
            }
    }

    useEffect(()=>{
        setFilter(filterValue)
    },[filterValue])

    useEffect(()=>{

    },[searchValue])
    return (
        <>
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
        </>
    );
};

export default TodoListContainer;
