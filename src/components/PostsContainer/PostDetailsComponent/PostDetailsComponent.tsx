import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IPostModel} from "../../../models/IPostModel";
import css from "./PostDetails.module.css"
interface IProps{
    post: IPostModel
}
const PostDetailsComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    return (
        <div className={css.postDetails}>
            <h3>{post.id} - user id - {post.userId}</h3>
            <p>Title - {post.title}</p>
            <p>Text - {post.body}</p>
            <button onClick={() => navigate(`/users/${post.userId}/posts/${post.id}/comments`)}>Show comments of post</button>

        </div>
    );
};

export default PostDetailsComponent;