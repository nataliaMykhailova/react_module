import React from 'react';

import {useStore} from "../../context/ContextProvider";
import PostComponent from "../PostComponent/PostComponent";
import {UseScrollToHashComponent} from "../../helpers/UseScroll";


const PostsComponent = () => {
    const {postStore:{allPosts}}=useStore();
   UseScrollToHashComponent(allPosts);
    return (
        <div>
            {
                allPosts.map(post =><div  key={post.id} id={`post-${post.id}`}>
                    <PostComponent post={post}/></div>)
            }
        </div>
    );
};

export default PostsComponent;