import React from 'react';
import {Form, Input} from "antd";
import {SearchFormInterface} from "../types/type";



const SearchForm = ({searchValue , setSearchValue} : SearchFormInterface) => {

    const handOnSubmitForm = (e : React.SyntheticEvent<EventTarget>) : void =>{
        e.preventDefault()
        setSearchValue("")
    }

    return (
        <Form
            onFinish={(e)=>{
                handOnSubmitForm(e)
            }}
        >
            <Input
                onChange={(e)=>{
                    setSearchValue(e.target.value)
                }}
                value={searchValue}
                type = "text"
                placeholder = "searched task"
            />
        </Form>
    );
};

export default SearchForm;
