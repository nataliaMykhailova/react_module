import React from 'react';
import {NavLink} from "react-router-dom";
import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/'}>Home page</NavLink>
            <NavLink to={'auth'}>Authorization</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>

        </div>
    );
};

export default HeaderComponent;