import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import PostDetailsComponent from "../../components/PostsContainer/PostDetailsComponent/PostDetailsComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/PostSlice";

const PostDetailsPage = () => {
    const {postId}= useParams<{postId:string}>();
    const dispatch = useAppDispatch();
    const {post}= useAppSelector(state => state.postSlice);
    console.log(postId);
    console.log(post);
    useEffect(() => {
        if (postId) {
            dispatch(postActions.loadById(+postId))
        }
    }, [postId]);
    return (
        <div>
            {
                post && <PostDetailsComponent post={post}/>
            }

        </div>
    );
};

export default PostDetailsPage;