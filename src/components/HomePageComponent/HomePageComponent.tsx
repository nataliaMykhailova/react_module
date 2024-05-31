import React from 'react';
import {UseNavigateHook} from "../../helpers/useNavigate";
import css from './HomePageComponent.module.css'


const HomePageComponent = () => {
   const handleClick = UseNavigateHook();
    return (
        <div className={css.homePage}>
            <button onClick={()=>handleClick('/registration')}>Registration</button>
            <button onClick={()=>handleClick('/auth')}>Authorization</button>

        </div>
    );
};

export default HomePageComponent;