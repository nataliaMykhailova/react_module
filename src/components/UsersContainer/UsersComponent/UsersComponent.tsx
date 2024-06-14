import React from 'react';

import {useAppSelector} from "../../../redux/store";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const {users,isLoaded}= useAppSelector(state => state.userSlice);
    return (
        <div>
            {
              isLoaded &&  users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;