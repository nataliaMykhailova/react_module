import React from 'react';
import css from './Sidebar.module.css'
import {useStore} from "../../context/ContextProvider";
import {NavLink} from "react-router-dom";

const SidebarComponent = () => {
    const {
        userStore: {favouriteUser},
        postStore: {favouritePost},
        commentsStore: {favouriteComment}
    } = useStore();
    return (
        <div className={css.sidebar}>
            <h3>Favourite user:</h3>
            {favouriteUser ? <NavLink to={`/users#user-${favouriteUser.id-1}`} className={css.favourite}>
                {favouriteUser?.name}
            </NavLink>: <h4>no favourite user</h4>}
            <h3>Favourite post:</h3>
            {favouritePost ? <NavLink to={`/posts#post-${favouritePost.id-1}`} className={css.favourite}>
                {favouritePost?.title}
            </NavLink>: <h4>no favourite post</h4>}
            <h3>Favourite comment:</h3>
            {favouriteComment ? <NavLink to={`/comments#comment-${favouriteComment.id-1}`} className={css.favourite}>
                {favouriteComment?.body}
            </NavLink>: <h4>no favourite comment</h4>}

        </div>
    );
};

export default SidebarComponent;