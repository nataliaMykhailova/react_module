import React from 'react';
import {NavLink} from "react-router-dom";

import css from './HeaderComponent.module.css'

const HeaderComponent = () => {

    return (
        <div className={css.header}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </div>
    );
};

export default HeaderComponent;