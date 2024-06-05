import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import UserComponent from "../UserComponent/UserComponent";


const UsersComponent = () => {
   const {usersStore:{allUsers}}=useContextProvider();
    return (
        <div>
            {
                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
            
            </div>
    );
};

export default UsersComponent;