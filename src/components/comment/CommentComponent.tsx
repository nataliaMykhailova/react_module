import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";

interface ICommentProps{
    comment: ICommentModel
}
type ICommentPropsType = ICommentProps & {children?: React.ReactNode};
const CommentComponent:FC<ICommentPropsType> = ({comment}) => {
    return (
        <div>
            <h2>Post Id - {comment.postId}</h2>
            <h3>{comment.id} - {comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;