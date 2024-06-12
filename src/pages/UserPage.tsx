import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useStore} from "../context/ContextProvider";
import {commentService, postService, userService} from "../services/apiService";

const UserPage = () => {
    const {userStore:{loadAllUsers}, postStore:{loadAllPosts}, commentsStore:{loadAllComments}}=useStore();
    const [ifDataIsLoaded, setIfDataIsLoaded] = useState<boolean>(false)
    useEffect(() => {
        if (!ifDataIsLoaded) {
            userService.getAll().then(({data}) => loadAllUsers(data));
            postService.getAll().then(({data}) => loadAllPosts(data));
            commentService.getAll().then(({data}) => loadAllComments(data));
        }
        setIfDataIsLoaded(true);
    }, [ifDataIsLoaded]);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UserPage;