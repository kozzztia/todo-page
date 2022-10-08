import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {Button ,Input} from "antd";

const SearchForm = () => {
    return (
        <form>
            <Input
                type = "text"
                placeholder = "searched task"
            />
            <Button type="primary" icon={<SearchOutlined />}>
                find
            </Button>

        </form>
    );
};

export default SearchForm;
