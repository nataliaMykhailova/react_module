import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import './App.css';
import HightOrderExample from "./components/HightOrderExample";

const MemoComponent:FC<any> = memo(({foobar}) => {
    console.log('MemoComponent render')
    foobar();
  return <div>hello</div>
});
const App:FC = () =>  {
    console.log('App render');
    const [count, setCount] = useState<number>(0);
    const foobar = useCallback(()=>{

    }, []);
    const arr = useMemo(()=>{
        return [];
    }, [])
  return (
      <>
          <HightOrderExample foobar ={'fvbgfcdccvfgb'}/>
          <MemoComponent foobar = {foobar} arr = {arr}/>
          <button onClick={()=> setCount(count+1)}>click</button>
      </>
  );
}

export default App;
