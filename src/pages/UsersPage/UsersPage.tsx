import React from 'react';
import UsersComponent from "../../components/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";
import styles from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={styles.usersPage}>
           <div className={styles.wight25}><UsersComponent/></div>
               <div className={styles.wight60}> <Outlet/></div>
            </div>
    );
};

export default UsersPage;