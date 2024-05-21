import React, { FC, useEffect, useState } from 'react';
import { IUserModel } from '../../models/userModels/IUserModel';
import UserComponent from '../../components/UserComponent/UserComponent';
import {userService} from "../../services/userSevices";
import {UseScrollToHashComponent} from "../../hooks/UseScrollToHashComponent";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userService.getAllUsers().then(({ data }) => setUsers(data));
    }, []);
    UseScrollToHashComponent(users);
    return (
        <div>
            <div>
            {users.map(user => (
                <div key={user.id} id={`user-${user.id}`}>
                    <UserComponent user={user} />
                </div>
            ))}
            </div>
        </div>
    );
};

export default UsersComponent;