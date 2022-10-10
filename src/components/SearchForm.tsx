import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {Button ,Input} from "antd";
import {SearchFormInterface} from "../types/type";



const SearchForm = ({searchValue , setSearchValue} : SearchFormInterface) => {

    const handOnSubmitForm = (e : React.SyntheticEvent<EventTarget>) : void =>{
        e.preventDefault()
        setSearchValue("")
    }

    return (
        <form
            onSubmit={(e)=>{
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
            <Button
                disabled={true}
                htmlType="submit"
                type="primary"
                icon={<SearchOutlined />}>
            </Button>
        </form>
    );
};

export default SearchForm;
