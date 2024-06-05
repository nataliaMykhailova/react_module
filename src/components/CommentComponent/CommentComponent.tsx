import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import css from './CommentComponent.module.css'
import {useContextProvider} from "../../context/ContextProvider";
interface IProps{
    comment: ICommentModel;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    const {commentsStore:{setFavouriteComment}}=useContextProvider()
    return (
        <div className={css.comment}>
            <h2>Post id: {comment.postId}, comment id: {comment.id}</h2>
            <h3>Name: {comment.name}, email: {comment.email}</h3>
            <p>{comment.body}</p>
            <button onClick={() => setFavouriteComment(comment)}>set as favourite</button>
        </div>
    );
};

export default CommentComponent;