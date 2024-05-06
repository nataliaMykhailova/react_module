import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModels/IPostModel";
import {postRequests} from "../../services/posts.api.services";
import PostComponent from "../Post/PostComponent";
interface IPostsProps{
    posts: IPostModel[]
}
const PostsComponent: FC<IPostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <div key={post.id}><PostComponent post={post}/></div>)
            }
        </div>
    );
};

export default PostsComponent;