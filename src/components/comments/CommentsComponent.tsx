import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "../comment/CommentComponent";

interface ICommentsProps {
    comments: ICommentModel[];
}

const CommentsComponent:FC<ICommentsProps>= ({comments}) => {
    return (
        <div>
            {
                comments.map((comment: ICommentModel) => (<li key={comment.id}> <CommentComponent comment={comment}/></li>))
            }
        </div>
    );
};

export default CommentsComponent;