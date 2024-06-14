import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IUserModel} from "../../../models/IUserModels/IUserModel";
import css from './UserDetails.module.css'

interface IProps{
    user:IUserModel
}
const UserDetailsComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div className={css.userDetails}>
            <h3>{user.id} - {user.name}</h3>
            <p>username - {user.username}</p>
            <p>email - {user.email}</p>
            <p>phone - {user.phone}</p>
            <p>website - {user.website}</p>
            <button onClick={()=>navigate(`/users/${user.id}/posts`)}>Show posts of user</button>


        </div>
    );
};

export default UserDetailsComponent;