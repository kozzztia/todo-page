import React, {useState} from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {Button ,Input} from "antd";
import {SearchFormInterface} from "../types/type";



const SearchForm = ({searchValue , setSearchValue} : SearchFormInterface) => {
    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                console.log(searchValue)
                setSearchValue("")
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
                htmlType="submit"
                type="primary" icon={<SearchOutlined />}>
                search
            </Button>
        </form>
    );
};

export default SearchForm;
