import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModels/IUserModel";
import UserComponent from "../User/UserComponent";
import {userRequests} from "../../services/users.api.servises";
import PostComponent from "../Post/PostComponent";

type IPropsType = {lift?:(userId:number) => void};
const UsersComponent:FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userRequests.getAllUsers().then(value => setUsers([...value.data.users]))
    }, []);
    return (
        <div>
            {
                users.map(user => <div key={user.id}><UserComponent user={user} lift={lift}/></div>)
            }
        </div>
    );
};

export default UsersComponent;
