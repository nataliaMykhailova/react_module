import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {requests} from "../../servises/jph.api.servise";
import PostComponent from "../post/PostComponent";

interface IPostsProps {
    userId: number;
    liftComments?: (postId: number) => void;
}
const PostsComponent:FC<IPostsProps> = ({userId, liftComments}) => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        requests.posts.getPostsOfOneUser(userId).then(({data}) => setPosts(data))
    }, [userId]);
    return (
        <div>
            {
                posts.map(post => (<PostComponent key={post.id} post={post} liftComments={liftComments}/>))
            }
        </div>
    );
};

export default PostsComponent;