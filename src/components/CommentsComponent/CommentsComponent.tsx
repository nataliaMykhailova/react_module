import React, {FC} from 'react';
import CommentComponent from "../CommentComponent/CommentComponent";
import {ICommentModel} from "../../models/commentsModels/ICommentModel";
interface ICommentsProps{
    comments: ICommentModel[];
}
const CommentsComponent:FC<ICommentsProps> = ({comments}) => {

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key = {comment.id} comment={comment}/>)
            }
        </div>
    );
};
export default CommentsComponent;