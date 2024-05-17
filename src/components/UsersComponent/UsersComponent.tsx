import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModels/IUserModel";
import {userService} from "../../services/userService";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, [])
    return (
        <div>
            {
                users.map(user => <UserComponent key= {user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;