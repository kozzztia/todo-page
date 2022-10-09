import React from 'react';
import {DoneStatusType} from "../types/type";

const WorkStatus = ({done}:DoneStatusType) => {
    return (
        <p>
            status : {!done?<>most</>:<>done</>}
        </p>
    );
};

export default WorkStatus;
