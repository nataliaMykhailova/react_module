import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../user/UserComponent";
import {requests} from "../../servises/jph.api.servise";


type IUsersPropsType = {liftPosts?:(userId:number)=> void}
const UsersComponent:FC<IUsersPropsType> = ({liftPosts}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        requests.users.getAllUsers().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {
                users.map(user =>( <UserComponent key={user.id} user={user} liftPosts={liftPosts}/>))
            }
            </div>
    );
};

export default UsersComponent;