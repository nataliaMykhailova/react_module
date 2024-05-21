import React, {FC} from 'react';
import {IPostModel} from "../../models/postModels/IPostModel";
import styles from './PostComponent.module.css'
import {UseNavigate} from "../../hooks/UseNavigate";
interface IPostProps{
    post: IPostModel;
}
const PostComponent:FC<IPostProps> = ({post}) => {
    const handleClick = UseNavigate();
    return (
        <div className={styles.postComponent}>
            <h1>Id - {post.id},  user Id - {post.userId}</h1>
            <h4>Title: <br/> {post.title}</h4>
            <p>Body: <br/> {post.body}</p>
            <button onClick={()=>handleClick(post.id.toString()) + '/comments'}>Show comments of post</button>
            </div>
    );
};

export default PostComponent;