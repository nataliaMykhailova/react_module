import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModels/IUserModel";
import css from './UserComponent.module.css'
import {useContextProvider} from "../../context/ContextProvider";
interface IProps{
    user: IUserModel;
    children?: React.ReactNode
}
const UserComponent:FC<IProps> = ({user, children}) => {
    const {usersStore:{setFavouriteUser}}=useContextProvider();
    return (
        <div className={css.user}>
            <h1>{user.id} - {user.name}</h1>
            <h2>Email: {user.email}; phone: {user.phone}</h2>
            <button onClick={()=>setFavouriteUser(user)}>set as favourite user</button>
            <div>
                {children}
            </div>

        </div>
    );
};

export default UserComponent;