import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/UserSlice";
import UserDetailsComponent from "../../components/UsersContainer/UserDetailsComponent/UserDetailsComponent";

const UserDetailsPage = () => {
    const {userId}= useParams<{userId:string}>();
    const dispatch = useAppDispatch();
    const {user}= useAppSelector(state => state.userSlice);
    useEffect(() => {
        if (userId) {
            dispatch(userActions.loadUserById(+userId))
        }
    }, [userId]);
    return (
        <div>
            {
                user && <UserDetailsComponent user={user}/>
            }
        </div>
    );
};

export default UserDetailsPage;