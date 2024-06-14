import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IUserModel} from "../../../models/IUserModels/IUserModel";
import css from "./UserComponent.module.css"
interface IProps{
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div className={css.user}>
           <h1> {user.id} {user.username}</h1>
            <button onClick={()=>navigate(user.id.toString())}>Show full info about user</button>
        </div>
    );
};

export default UserComponent;