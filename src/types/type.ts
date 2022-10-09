import React from "react"


export interface FormInterface {
    handleFormSubmit : ( e: React.SyntheticEvent<EventTarget> | any) => void;
    task : string;
    setTask : React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchFormInterface {
    searchValue : string;
    setSearchValue : React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterFormInterface {
    filterValue : number;
    setFilterValue : React.Dispatch<React.SetStateAction<number>>

}
export interface TodoListContainerInterface {
    todos: todoType[] | [],
    handleCheckValue:handleCheckValueType,
}
export interface TodoButtonInterface {
    checkedId:number,
    handleCheckValue:handleCheckValueType,
}
export interface TodoCheckboxInterface {
    checkedId:number,
    handleCheckValue:handleCheckValueType,
}

export type handleCheckValueType = (todosId: number)=> void


export type todoType = {
    id : number,
    todoTask : string,
    done : boolean,
}
















export type todoListTypes={
    task: string,
    todos : todoType[] | [],
    setTodos : React.Dispatch<React.SetStateAction<[] | todoType[]>>,
}
export type todoItemType ={
    keys:number,
    item:todoType,
    setTodos: React.Dispatch<React.SetStateAction<[] | todoType[]>>,
    todos: todoType[] | [],
    task:string;
}
export type todoTextType={
    id:number,
    todos : todoType[] | [],
    text: string,
    setTodos: React.Dispatch<React.SetStateAction<[] | todoType[]>>,
}
