/*3. useStorage - hook that allows a component to store a value in the browser's LocalStorage*/
import {useState} from "react";
//спочатку це була от такий більш універсальний хук, але я хотіла більш візуалізувати, тому
//зробила хук тільки для чисел.
/*const UseStorage = <T,>(key:string, value:T) => {
    const [item, setItem] = useState<T>(()=>{
        const itemFromStorage = localStorage.getItem(key);
        if(itemFromStorage){
            return JSON.parse(itemFromStorage);
        } else {
            return value;
        }
    })
    const setItemToLocalStorage = (value:T) => {
        setItem(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return {
        item,
        createRandomNumber,
        setItemToLocalStorage
    };

}*/
const UseStorage = (key:string, value:number) => {
    const [item, setItem] = useState(()=>{
        const itemFromStorage = localStorage.getItem(key);
        if(itemFromStorage){
            return JSON.parse(itemFromStorage);
        } else {
            return value;
        }
    })
    const createRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        setItem(randomNumber);
    };

    const setItemToLocalStorage = () => {
        localStorage.setItem(key, JSON.stringify(item));
    };

    return {
        item,
        createRandomNumber,
        setItemToLocalStorage
    };

}
export default UseStorage;