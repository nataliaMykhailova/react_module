import React from 'react';

import {useStore} from "../../context/ContextProvider";
import CommentComponent from "../CommentComponent/CommentComponent";
import {UseScrollToHashComponent} from "../../helpers/UseScroll";

const CommentsComponent = () => {
    const {commentsStore:{allComments}}=useStore();
    UseScrollToHashComponent(allComments);
    return (
        <div>
            {
                allComments.map(comment =><div  key={comment.id} id={`comment-${comment.id}`}><CommentComponent comment={comment}/></div>)
            }

        </div>
    );
};

export default CommentsComponent;