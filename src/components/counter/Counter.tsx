import React, {useEffect, useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{
    }, [count])

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
        <div>
            {count}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

