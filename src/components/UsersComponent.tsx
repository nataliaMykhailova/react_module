import React from 'react';
import {useStore} from "../context/ContextProvider";

const UsersComponent = () => {
    const {userStore:{allUsers}}=useStore();
    return (
        <div style={{marginTop:85, fontSize:70}}>
            {allUsers.map(user => <div key={user.id}>{user.id} - {user.username}</div>)}
            
            </div>
    );
};

export default UsersComponent;