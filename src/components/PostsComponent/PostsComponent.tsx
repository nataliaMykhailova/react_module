import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/postModels/IPostModel";
import {postService} from "../../services/postService";
import PostComponent from "../PostComponent/PostComponent";
import postComponent from "../PostComponent/PostComponent";

const PostsComponent:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(()=>{
        postService.getAllPosts().then(({data}) => setPosts(data));
    }, [])
    return (
        <div>
            {
                posts.map(post =><PostComponent key= {post.id} post={post}/> )
            }
        </div>
    );
};

export default PostsComponent;