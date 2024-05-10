/*usePrevious - hook that allows a component to keep track of the previous value of a variable*/
import {useRef} from "react";


const UsePrevious =<T,>(value:T):T|undefined => {
    const currentValue = useRef<T>();
    const previousValue = useRef<T>();
    if (currentValue.current!==value) {
        previousValue.current = currentValue.current;
        currentValue.current = value;
    }
    return previousValue.current
}
export default UsePrevious;
