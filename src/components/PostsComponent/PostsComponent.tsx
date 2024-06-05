import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const {postsStore:{allPosts}}= useContextProvider();
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
            
        </div>
    );
};

export default PostsComponent;