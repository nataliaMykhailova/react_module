import React, {FC} from 'react';
import {WithCommonLogicWrapper} from "../hooks/WithCommonLogicWrapper";

const HightOrderExample:FC<any> = ({foobar}) => {
    return (
        <div>
            {foobar}
        </div>
    );
};

export default WithCommonLogicWrapper(HightOrderExample);