import React, {FC} from 'react';
import {IUserModel} from "../../models/userModels/IUserModel";
import styles from './UserComponent.module.css'
import {UseNavigate} from "../../hooks/UseNavigate";

interface IUserProps{
    user: IUserModel
}
const UserComponent:FC<IUserProps> = ({user}) => {
    const handleClick = UseNavigate();
    return (
        <div className={styles.userComponent}>
            <h2>{user.id} - {user.name}</h2>
            <h4>Username - {user.username}, email - {user.email}</h4>
            <h5>Phone - {user.phone}, website - {user.website}</h5>
            <ul>Address:
                <li>Street: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <ul>Geo:
                    <li>Lat - {user.address.geo.lat}</li>
                    <li>Lng - {user.address.geo.lng}</li>
                </ul>
            </ul>
            <ul>Company:
                <li>Name: {user.company.name}</li>
                <li>Catch phrase: {user.company.catchPhrase}</li>
                <li>Bs: {user.company.bs}</li>
            </ul>
            <button onClick={()=>handleClick(user.id.toString()+'/posts') }>Show posts of user</button>

        </div>
    );
};

export default UserComponent;