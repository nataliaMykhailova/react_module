import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModels/IUserModel";
import styles from './UserComponent.module.css'
interface IUserProps{
    user: IUserModel
}
type IUserPropsType = IUserProps & {children?: React.ReactNode} & {lift?:(userId:number) => void};
const UserComponent:FC<IUserPropsType> = ({user, lift}) => {
    let onClickHandler = () =>{
        if (lift){
            lift(user.id)
        }
    }
    return (
        <div className={styles.userComponent}>
            <h3>{user.id} - {user.username} {user.firstName} {user.maidenName} {user.lastName}</h3>
            <img src={user.image} alt={user.username}/>
            <h5>Email - {user.email}, phone number - {user.phone}</h5>
            <p>Age: {user.age}, gender: {user.gender}, birthDate: {user.birthDate}, blood group: {user.bloodGroup}</p>
            <p>Domain - {user.domain}, IP - {user.ip}</p>
            <ul>Address:
                <li>Address: {user.address.address}</li>
                <li>City: {user.address.city}</li>
                <li>State: {user.address.state}</li>
                <li>Postal code: {user.address.postalCode}</li>
                <ul>Coordinates:
                <li>Lat: {user.address.coordinates.lat}</li>
                <li>Lng:v{user.address.coordinates.lng}</li>
                </ul>
            </ul>
            <button onClick={onClickHandler}>Show posts of user</button>
        </div>
    );
};
export default UserComponent;