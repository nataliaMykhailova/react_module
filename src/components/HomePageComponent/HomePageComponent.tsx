import React from 'react';
import {NavLink} from "react-router-dom";

import css from './HomePageComponent.module.css'

const HomePageComponent = () => {
    return (
        <div className={css.homePage}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/usersPosts'}>Users with posts</NavLink>
            <NavLink to={'/postsComments'}>Posts with comments</NavLink>

        </div>
    );
};

export default HomePageComponent;