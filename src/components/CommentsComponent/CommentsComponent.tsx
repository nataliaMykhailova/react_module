import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../models/commentModels/ICommentModel";
import {commentsService} from "../../services/commentsService";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent:FC = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(()=>{
        commentsService.getAllComments().then(({data}) => setComments(data));
    }, [])
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key= {comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;