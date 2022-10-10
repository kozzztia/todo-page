import React from "react"


export interface FormInterface {
    handleFormSubmit : ( e: React.SyntheticEvent<EventTarget>) => void;
    task : string;
    setTask : React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchFormInterface {
    searchValue : string;
    setSearchValue : React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterFormInterface {
    filterValue : string;
    setFilterValue : React.Dispatch<React.SetStateAction<string>>

}
export interface TodoListContainerInterface {
    todos: todoType[] | [],
    handleCheckValue:HandleCheckValueType,
    delDoneTodo:delDoneTodoType,
    filterValue: string,
    searchValue :string,
}

export interface TodoListInterface {
    searchFilteredTodos:(searchArg: string, filterArgs: string,)=>todoType[] | [],
    searchValue: string,
    filterValue: string,
    handleCheckValue:HandleCheckValueType,
    delDoneTodo: delDoneTodoType,
}

export interface TodoToolsInterface {
    checkedId:number,
    handleCheckValue:HandleCheckValueType,
    delDoneTodo:delDoneTodoType,
    done: boolean,
}
export interface TodoButtonInterface {
    delDoneTodo:delDoneTodoType,
    checkedId:number,
    done:boolean,
}

export interface TodoCheckboxInterface {
    checkedId:number,
    handleCheckValue:HandleCheckValueType,
    done:boolean,
}

export type HandleCheckValueType = (todosId : number)=> void

export type delDoneTodoType = (todosId : number)=> void

export type DoneStatusType = {
    done : boolean
}

export type todoType = {
    id : number,
    todoTask : string,
    done : boolean,
}


