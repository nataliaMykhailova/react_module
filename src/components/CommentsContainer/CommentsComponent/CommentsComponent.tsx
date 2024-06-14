import React from 'react';

import {useAppSelector} from "../../../redux/store";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {
    const {comments} = useAppSelector(state => state.postSlice);
    console.log(comments);
    return (
        <div>
            {
                comments && comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
            </div>
    );
};

export default CommentsComponent;