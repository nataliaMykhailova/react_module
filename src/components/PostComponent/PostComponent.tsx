import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import css from './PostComponent.module.css'
import {useStore} from "../../context/ContextProvider";
interface IProps{
    post:IPostModel,
    children?: React.ReactNode
}
const PostComponent:FC<IProps> = ({post, children}) => {
    const {postStore:{setFavouritePost}}=useStore();
    return (
        <div className={css.post}>
            <h1>post id - {post.id} user id - {post.userId}</h1>
            <h3>Title:</h3>
            <p>{post.title}</p>
            <h3>Text:</h3>
            <p>{post.body}</p>
            <button onClick={()=>setFavouritePost(post)}>set as favourite post</button>
            <div>{children}</div>
            
        </div>
    );
};

export default PostComponent;