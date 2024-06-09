import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import css from './CommentComponent.module.css'
import {useStore} from "../../context/ContextProvider";
interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    const {commentsStore:{setFavouriteComment}}=useStore();
    return (
        <div className={css.comment}>
            <h1>Comment id - {comment.id}, post id: {comment.postId}</h1>
            <h3>Email: {comment.email}</h3>
            <h3>Name: {comment.name}</h3>
            <h3>Text:</h3>
            <p>{comment.body}</p>
            <button onClick={()=>setFavouriteComment(comment)}>set as favourite comment</button>
        </div>
    );
};

export default CommentComponent;