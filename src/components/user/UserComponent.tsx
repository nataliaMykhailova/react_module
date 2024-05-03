import React, {FC, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IUserProps {
    user: IUserModel
}
type IUserPropsType = IUserProps & { children?: React.ReactNode } & { liftPosts?: (postId: number) => void };
const UserComponent: FC<IUserPropsType> = ({user,liftPosts}) => {

    const onClickHandlerPosts = () => {
        if (liftPosts) {
            liftPosts(user.id);
        }
    };
    return (
        <div>
            <h1>{user.id} - {user.name}</h1>
            <p>Username: {user.username}, E-mail: {user.email}, Phone: {user.phone}, Website: {user.website}</p>
            <ul>Address:
                <li>City - {user.address.city}</li>
                <li>Street - {user.address.street}</li>
                <li>Suite - {user.address.suite}</li>
                <li>Zipcode - {user.address.zipcode}</li>
                <ul>Geo:
                    <li>Lat - {user.address.geo.lat}</li>
                    <li>Lng - {user.address.geo.lng}</li>
                    </ul>
            </ul>
            <ul>Company:
            <li>Name - {user.company.name}</li>
            <li>Bs - {user.company.bs}</li>
            <li>Catch Phrase - {user.company.catchPhrase}</li>
            </ul>
            <button onClick={onClickHandlerPosts}> Show posts of user</button>

        </div>
    );
};

export default UserComponent;