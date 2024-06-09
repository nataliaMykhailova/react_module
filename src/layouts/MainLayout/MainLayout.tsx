import React, {useEffect, useState} from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import css from './MainLayout.module.css'
import {useStore} from "../../context/ContextProvider";
import {userService} from "../../services/userService";
import {postService} from "../../services/postService";
import {commentService} from "../../services/commentService";

const MainLayout = () => {
    const {userStore:{loadAllUsers}, postStore:{loadAllPosts}, commentsStore:{loadAllComments}}=useStore();
    const [ifDataIsLoaded, setIfDataIsLoaded] = useState<boolean>(false)
    useEffect(() => {
        if (!ifDataIsLoaded) {
            userService.getAllUsers().then(({data}) => loadAllUsers(data));
            postService.getAllPosts().then(({data}) => loadAllPosts(data));
            commentService.getAllComments().then(({data}) => loadAllComments(data));
        }
        setIfDataIsLoaded(true);
    }, [ifDataIsLoaded]);
    return (
        <div className={css.container}>
            <HeaderComponent/>
            <div className={css.content}>
                <SidebarComponent/>
                <div className={css.outlet}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;