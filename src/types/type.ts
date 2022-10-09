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
    filterValue : number;
    setFilterValue : React.Dispatch<React.SetStateAction<number>>

}
export interface TodoListContainerInterface {
    todos: todoType[] | [],
    handleCheckValue:HandleCheckValueType,
    delDoneTodo:delDoneTodoType,
    filterValue: number,
}
export interface TodoButtonInterface {
    checkedId:number,
    handleCheckValue:HandleCheckValueType,
    delDoneTodo:delDoneTodoType,
}
export interface TodoCheckboxInterface {
    checkedId:number,
    handleCheckValue:HandleCheckValueType,
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


