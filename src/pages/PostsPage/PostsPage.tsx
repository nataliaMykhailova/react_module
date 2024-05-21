import React, {useEffect, useState} from 'react';
import PostsComponent from "../../components/PostsComponent/PostsComponent";
import {Outlet, useParams} from "react-router-dom";
import {IPostModel} from "../../models/postModels/IPostModel";
import {postService} from "../../services/postsServices";
import styles from './PostsPage.module.css'

const PostsPage = () => {
   const {userId} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        if (userId){
            postService.getPostsOfSingleUser(userId).then(({data})=> setPosts(data));
        } else {
                postService.getAllPosts().then(({data}) => setPosts(data));
        }
    }, [userId]);
    return (
        <div className={styles.postPage}>
           <div className={userId ? styles.wight25 : ''}><PostsComponent posts={posts}/></div>
            <div className={userId ? styles.wight25 : ''}><Outlet/></div>


        </div>
    );
};

export default PostsPage;