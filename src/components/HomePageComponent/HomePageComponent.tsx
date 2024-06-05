import React from 'react';
import {NavLink} from "react-router-dom";
import ccs from './HomePageComponent.module.css'
import {useContextProvider} from "../../context/ContextProvider";


const HomePageComponent = () => {
   const {favourites:{favouriteUser, favouritePost, favouriteComment}}=useContextProvider()
    return (
        <div className={ccs.homeContainer}>
            <div>
                <NavLink to={'/users'}>Show all users</NavLink>
                <NavLink to={'/posts'}>Show all posts</NavLink>
                <NavLink to={'/comments'}>Show all comments</NavLink>
                <NavLink to={'/usersPosts'}>Show users and their posts</NavLink>
                <NavLink to={'/postsComments'}>Show posts and comments on them</NavLink>
            </div>
            <div>
                <h1>Favourite user:</h1>
                {favouriteUser ? <h3 className={ccs.favourite}>{favouriteUser.name}</h3> : <h3>no favourite user</h3>}
                <h1>Favourite post:</h1>
                {favouritePost ? <h3 className={ccs.favourite}>{favouritePost.title}</h3> : <h3>no favourite post</h3>}
                <h1>Favourite comment:</h1>
                {favouriteComment ? <h3 className={ccs.favourite}>{favouriteComment.body}</h3> : <h3>no favourite comment</h3>}
            </div>
        </div>
    );
};

export default HomePageComponent;