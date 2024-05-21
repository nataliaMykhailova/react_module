import React, {FC} from 'react';
import {IPostModel} from "../../models/postModels/IPostModel";
import PostComponent from "../PostComponent/PostComponent";

interface IPostProps{
    posts: IPostModel[]
}
const PostsComponent:FC<IPostProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostComponent key= {post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;