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
                <Radio value={'done'}>
                    done
                </Radio>
                <Radio value={'notDone'}>
                    not done
                </Radio>
                <Radio value={"all"}>
                    all
                </Radio>
            </Radio.Group>
    );
};

export default FilterForm;
