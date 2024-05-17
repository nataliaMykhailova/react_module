import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentModels/ICommentModel";
import styles from './CommentComponent.module.css'
interface ICommentProps{
    comment:ICommentModel
}
const CommentComponent:FC<ICommentProps> = ({comment}) => {
    return (
        <div className={styles.commentModule}>
            <h2>Id - {comment.id}  Post id - {comment.postId}</h2>
            <h4>Name - {comment.name}</h4>
            <h5>Email - <br/>{comment.email}</h5>
            <p>Body - <br/>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;