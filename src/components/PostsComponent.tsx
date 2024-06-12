import React from 'react';
import {useStore} from "../context/ContextProvider";

const PostsComponent = () => {
    const {postStore:{allPosts}}=useStore();
    return (
        <div style={{marginTop:85, fontSize:70}}>
            {
                allPosts.map(post =><div key={post.id}>
                    {post.id} - userId - {post.userId} title: {post.title}
                </div>)
            }
        </div>
    );
};

export default PostsComponent;