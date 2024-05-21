import React, { FC, useEffect, useState } from 'react';
import { IUserModel } from '../../models/userModels/IUserModel';
import { NavLink } from 'react-router-dom';
import {userService} from "../../services/userSevices";
import styles from './HomePageComponent.module.css'

const HomePageComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userService.getAllUsers().then(({ data }) => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div  className={styles.homePageComponent} key={user.id}>
                    <h1>{user.id} - {user.name}</h1>
                    <NavLink to={`/users#user-${user.id}`}>Show full info about user {user.name}</NavLink>
                </div>
            ))}
        </div>
    );
};

export default HomePageComponent;