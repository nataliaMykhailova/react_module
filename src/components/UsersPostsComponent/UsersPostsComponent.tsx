import React, {useEffect, useMemo, useState} from 'react';

import {useStore} from "../../context/ContextProvider";
import {UserWithPostsType} from "../../models/Types/UserWithPostsType";
import PostComponent from "../PostComponent/PostComponent";
import UserComponent from "../UserComponent/UserComponent";

const UsersPostsComponent = () => {
    const {userStore:{allUsers}, postStore:{allPosts}}=useStore();
    const [usersWithPosts, setUsersWithPosts] = useState<UserWithPostsType[]>([]);
    const usersWithPostsArr = useMemo(()=>{
        return ()=>{
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post =>user.id===post.userId)};
            })
        }
    }, [allUsers, allPosts]);
    useEffect(() => {
        setUsersWithPosts(usersWithPostsArr)
    }, [usersWithPostsArr]);
    return (
        <div>
            {
                usersWithPosts.map(user => <UserComponent key={user.id} user={user}>
                    {user.posts.map(post => <PostComponent key={post.id} post={post}/>)}
                </UserComponent>)
            }
            </div>
    );
};

export default UsersPostsComponent;