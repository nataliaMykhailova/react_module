import React, {FC} from 'react';

import {IUserModel} from "../../models/IUserModels/IUserModel";
import css from './UserComponent.module.css'
import {useStore} from "../../context/ContextProvider";
interface IProps{
    user:IUserModel,
    children?: React.ReactNode
}
const UserComponent:FC<IProps> = ({user, children}) => {
    const {userStore:{setFavouriteUser}}=useStore();
    return (
        <div className={css.user}>
            <h1>id - {user.id} -  {user.name}</h1>
            <p>phone - {user.phone}</p>
            <p>email - {user.email}</p>
            <button onClick={()=>setFavouriteUser(user)} >Set as favourite user</button>
            <div>{children}</div>
        </div>
    );
};

export default UserComponent;