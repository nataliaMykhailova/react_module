import React, {useEffect, useState} from 'react';
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import {ICommentModel} from "../../models/commentsModels/ICommentModel";
import {commentsService} from "../../services/commentsServices";
import {useParams} from "react-router-dom";

const CommentsPage = () => {
    const {postId} =useParams();
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() =>{
        if(postId) {
            commentsService.getCommentsOfSinglePost(postId).then(({data}) => setComments(data));
        } else {
            commentsService.getAllComments().then(({data}) => setComments(data));
        }
    }, [postId])
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;