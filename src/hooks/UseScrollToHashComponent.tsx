import {useEffect} from "react";

const UseScrollToHashComponent =<T,> (deps:T[]) => {
    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}, [deps]);
}
export {
    UseScrollToHashComponent
}