import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../models/Types/PostWithCommentsType";
import PostComponent from "../PostComponent/PostComponent";
import CommentComponent from "../CommentComponent/CommentComponent";

const PostsCommentsComponent = () => {
    const {postStore:{allPosts}, commentsStore:{allComments}}= useStore();
    const [postsWithComments, setPostsWithComments] = useState<PostWithCommentsType[]>([]);
    const postsWithCommentsArr = useMemo(()=>{
        return ()=>{
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment =>post.id===comment.postId)};
            })
        }
    }, [allPosts, allComments]);
    useEffect(() => {
        setPostsWithComments(postsWithCommentsArr)
    }, [postsWithCommentsArr]);
    return (
        <div>
            {
                postsWithComments.map(post => <PostComponent key={post.id} post={post}>
                    {post.comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
                </PostComponent>)
            }

        </div>
    );
};

export default PostsCommentsComponent;