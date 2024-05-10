// 1. useToggle - custom React hook that allows a component to toggle a value
// between true and false
import {useState} from 'react';

const UseToggle = (initialValue:boolean) => {
    const [bool, setBool] = useState<boolean>(initialValue);
    const toggle = (valueState:boolean) => {
        setBool(valueState => !valueState)
    };
    return {bool, toggle};

};

export default UseToggle;