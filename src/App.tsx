import React, {FC, useState} from 'react';
import './App.css';
import useToggle from "./hooks/useToggle";
import usePrevious from "./hooks/usePrevious";
import useStorage from "./hooks/useStorage";

const App: FC = () => {
    const {bool, toggle} = useToggle(true);

    const [count, setCount] = useState<number>(0);
    const prevCount = usePrevious(count);

    const {item, createRandomNumber, setItemToLocalStorage} = useStorage('number', 0);

        return (
            <>
                <h1>{bool ? 'true' : 'false'}</h1>
                <button onClick={() => toggle(bool)}>toggle</button>
                <hr/>
                <h1>Current count  - {count}</h1>
                <h1>Previous count - {prevCount}</h1>
                <button onClick={() => {setCount(Math.floor(Math.random()*500))}}>change number</button>
                <hr/>
                <h1>Value - {item}</h1>
                <button onClick={createRandomNumber}>create number</button>
                <button onClick={setItemToLocalStorage}>save number</button>



            </>
        );
}

export default App;