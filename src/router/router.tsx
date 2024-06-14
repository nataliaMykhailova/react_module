import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import UserDetailsPage from "../pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

const routes: RouteObject[] = [
    { path: '/', element: <MainLayout />, errorElement: <ErrorLayout />,
        children:[
    { path: '/users', element: <UsersPage /> },
    { path: '/users/:userId', element: <UserDetailsPage /> },
    { path: '/users/:userId/posts', element: <PostsPage /> },
    { path: '/users/:userId/posts/:postId', element: <PostDetailsPage /> },
    { path: '/users/:userId/posts/:postId/comments', element: <CommentsPage /> },
    { path: '/posts', element: <PostsPage /> },
    { path: '/posts/:postId', element: <PostDetailsPage /> },
    { path: '/posts/:postId/comments', element: <CommentsPage /> },
            ]},
];

export const router = createBrowserRouter(routes);