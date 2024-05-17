import React, {FC} from 'react';
import {IPostModel} from "../../models/postModels/IPostModel";
import styles from './PostComponent.module.css'

interface IPostProps{
    post: IPostModel
}
const PostComponent:FC<IPostProps> = ({post}) => {
    return (
        <div className={styles.postComponent}>
            <h2>Id - {post.id}   User id - {post.userId}</h2>
            <h4>Title: <br/> {post.title}</h4>
            <h4>Body: <br/> {post.body}</h4>

        </div>
    );
};

export default PostComponent;