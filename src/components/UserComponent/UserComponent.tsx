import React, {FC} from 'react';
import {IUserModel} from "../../models/userModels/IUserModel";
import styles from './UserComponent.module.css'
interface IUserProps{
    user: IUserModel;
}
const UserComponent:FC<IUserProps> = ({user}) => {
    return (
        <div className={styles.userComponent}>
            <h2>{user.id} - {user.name}</h2>
            <p>username  - {user.username}, email - {user.email}, phone - {user.phone}, web site - {user.website}</p>
            <ul>Address:
                <li>Street - {user.address.street}</li>
                <li>Suite - {user.address.suite}</li>
                <li>City - {user.address.city}</li>
                <li>Zipcode - {user.address.zipcode}</li>
                <ul>Geo:
                    <li>Lat - {user.address.geo.lat}</li>
                    <li>Lng - {user.address.geo.lng}</li>
                </ul>
            </ul>
            <ul>Company:
                <li>Name - {user.company.name}</li>
                <li>Catch phrase - {user.company.catchPhrase}</li>
                <li>Bs - {user.company.bs}</li>
            </ul>
            </div>
    );
};
export default UserComponent;