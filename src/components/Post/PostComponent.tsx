import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModels/IPostModel";
import styles from './PostComponent.module.css'

interface IPostProps{
    post: IPostModel
}
type IPostPropsType = IPostProps & {children?: React.ReactNode};
const PostComponent:FC<IPostPropsType> = ({post}) => {
    return (
        <div className={styles.postComponent}>
            <h3>User id - {post.userId}, post id - {post.id}</h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <p>Tags - {post.tags}, reactions - {post.reactions}</p>
        </div>
    );
};

export default PostComponent;