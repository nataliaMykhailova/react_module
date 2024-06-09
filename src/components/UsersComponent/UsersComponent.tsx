import React, {useEffect} from 'react';
import {useStore} from "../../context/ContextProvider";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const {userStore:{allUsers}}=useStore();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [allUsers]);
    return (
        <div>
            {allUsers.map(user => <div  key={user.id} id={`user-${user.id}`}><UserComponent user={user}/></div>)}
        </div>
    );
};

export default UsersComponent;