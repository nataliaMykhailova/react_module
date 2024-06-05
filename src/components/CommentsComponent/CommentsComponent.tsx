import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {
    const {commentsStore:{allComments}}= useContextProvider();
    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
            
        </div>
    );
};

export default CommentsComponent;