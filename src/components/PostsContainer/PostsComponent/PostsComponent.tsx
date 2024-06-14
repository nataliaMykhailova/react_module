import React from 'react';

import {useAppSelector} from "../../../redux/store";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const posts = useAppSelector(state => state.postSlice.posts);
    const userPosts = useAppSelector(state => state.userSlice.userPosts);
    return (
        <div>
            {
                posts &&  posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
            {
                userPosts && userPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;