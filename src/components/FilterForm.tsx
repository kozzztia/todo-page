import React  from 'react';
import { Radio } from 'antd';
import {FilterFormInterface} from "../types/type";

const FilterForm = ({filterValue , setFilterValue} : FilterFormInterface) => {
    return (
            <Radio.Group
                onChange={(e)=>{
                    setFilterValue(e.target.value)
                }}
                value={filterValue}
            >
                <Radio value={1}>
                    done
                </Radio>
                <Radio value={2}>
                    not done
                </Radio>
                <Radio value={3}>
                    all
                </Radio>
            </Radio.Group>
    );
};

export default FilterForm;
