import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import css from './PostComponent.module.css'
import {useContextProvider} from "../../context/ContextProvider";
interface IProps{
    post: IPostModel;
    children?: React.ReactNode
}

const PostComponent:FC<IProps> = ({post, children}) => {
    const {postsStore:{setFavouritePost}}=useContextProvider()
    return (
        <div className={css.post}>
            <h2>User id: {post.userId} post id: {post.id}</h2>
            <h3>Title: {post.title}</h3>
            <p>Text: {post.body}</p>
            <button onClick={() => setFavouritePost(post)}>set as favourite</button>
            <div>
                {children}
            </div>

        </div>
    );
};

export default PostComponent;