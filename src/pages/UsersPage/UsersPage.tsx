import React, {useEffect} from 'react';

import UsersComponent from "../../components/UsersContainer/UsersComponent/UsersComponent";
import {useAppDispatch} from "../../redux/store";
import {userActions} from "../../redux/slices/UserSlice";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div>
            <UsersComponent/>

        </div>
    );
};

export default UsersPage;