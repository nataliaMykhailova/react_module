import React from 'react';

import {useStore} from "../../context/ContextProvider";
import UserComponent from "../UserComponent/UserComponent";
import {UseScrollToHashComponent} from "../../helpers/UseScroll";

const UsersComponent = () => {
    const {userStore:{allUsers}}=useStore();
   UseScrollToHashComponent(allUsers);
    return (
        <div>
            {allUsers.map(user => <div  key={user.id} id={`user-${user.id}`}><UserComponent user={user}/></div>)}
        </div>
    );
};

export default UsersComponent;