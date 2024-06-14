import React, {FC} from 'react';

import {ICommentModel} from "../../../models/ICommentModel";
import css from './CommentComponent.module.css'
interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div className={css.comment}>
            <h3>{comment.id}, post id - {comment.postId}</h3>
            <p>Email - {comment.email}</p>
            <p>Name  - {comment.name}</p>
            <p>Text - {comment.body}</p>

        </div>
    );
};

export default CommentComponent;