import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentsModels/ICommentModel";
import styles from './CommentComponent.module.css'
interface ICommentsProps{
    comment: ICommentModel
}
const CommentComponent:FC<ICommentsProps> = ({comment}) => {
    return (
        <div className={styles.commentComponent}>
            <h1>Id - {comment.id}, post Id - {comment.postId}</h1>
            <h4>Email - {comment.email}</h4>
            <h4>Name <br/> {comment.name}</h4>
            <p>Body <br/> {comment.body}</p>
        </div>
    );
};

export default CommentComponent;