import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import PostsComponent from "../../components/PostsContainer/PostsComponent/PostsComponent";
import {useAppDispatch} from "../../redux/store";
import {postActions} from "../../redux/slices/PostSlice";
import {userActions} from "../../redux/slices/UserSlice";

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const {userId}= useParams<{userId:string}>();
    useEffect(() => {
        if (userId) {
            dispatch(userActions.loadPosts(+userId))
        } else
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            <PostsComponent/>

        </div>
    );
};

export default PostsPage;