import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import CommentsComponent from "../../components/CommentsContainer/CommentsComponent/CommentsComponent";
import {useAppDispatch} from "../../redux/store";
import {postActions} from "../../redux/slices/PostSlice";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const {postId}= useParams<{postId:string}>();
    console.log(postId);
    useEffect(() => {
        if (postId) {
            dispatch(postActions.loadComments(+postId))
        }
    }, [postId]);
    return (
        <div>
            <CommentsComponent/>
            </div>
    );
};

export default CommentsPage;