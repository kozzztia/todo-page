import React , {useState} from 'react';
import { Radio  } from 'antd';

const FilterForm = () => {
    const [doneValue , setDoneValue] = useState(3)
    return (
        <form>
            <Radio.Group
                onChange={(e)=>{
                    setDoneValue(e.target.value)
                    console.log(doneValue)
                }}
                value={doneValue}>
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


        </form>
    );
};

export default FilterForm;
