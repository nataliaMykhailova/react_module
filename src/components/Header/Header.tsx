import React from 'react';
import {Link} from "react-router-dom";

import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.header}>
            <Link to={'/'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export default Header;