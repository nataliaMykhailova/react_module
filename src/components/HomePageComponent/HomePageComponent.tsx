import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './HomePageComponent.module.css'

const HomePageComponent:FC = () => {
    const navigate = useNavigate();
    const handleNavigation = (path:string)=>{
        navigate(path)
    }
    return (
        <div className={styles.homeComponent}>
            <button onClick={()=>handleNavigation('/users')}>Users </button>
            <button onClick={()=>handleNavigation('/posts')}>Posts </button>
            <button onClick={()=>handleNavigation('/comments')}>Comments </button>

        </div>
    );
};

export default HomePageComponent;