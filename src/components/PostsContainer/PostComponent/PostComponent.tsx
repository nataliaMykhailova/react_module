import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IPostModel} from "../../../models/IPostModel";
import css from './PostComponent.module.css'
interface IProps{
    post: IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    return (
        <div className={css.post}>
            <h3>Post id - {post.id}</h3>
            <p>Title - {post.title}</p>
            <button onClick={()=>navigate(post.id.toString())}>Show full info about post</button>
            </div>
    );
};

export default PostComponent;