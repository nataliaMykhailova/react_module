import React, {useEffect} from 'react';
import {useStore} from "../../context/ContextProvider";
import PostComponent from "../PostComponent/PostComponent";



const PostsComponent = () => {
    const {postStore:{allPosts}}=useStore();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [allPosts]);
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