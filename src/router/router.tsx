import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/EroorLayout/ErrorLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import UsersPostsPage from "../pages/UsersPostsPage/UsersPostsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage/PostsCommentsPage";

const routes:RouteObject[]=[
    {path:'/', element: <MainLayout/>,
    errorElement: <ErrorLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'users', element: <UsersPage/>},
        {path:'posts', element: <PostsPage/>},
        {path:'comments', element: <CommentsPage/>},
        {path:'usersPosts', element: <UsersPostsPage/>},
        {path:'postsComments', element: <PostsCommentsPage/>}
    ]}
]

const routerConfig = createBrowserRouter(routes);
export {
    routerConfig
}