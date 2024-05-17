import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import ErrorLayout from "../layouts/ErrorLayout";


export const routerConfig = createBrowserRouter([
    {path:'', element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'comments', element:<CommentsPage/>}

    ]},
])