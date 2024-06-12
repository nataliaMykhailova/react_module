import {createBrowserRouter, RouteObject} from "react-router-dom";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";
import MainLayout from "../layouts/MainLayout";

const routes: RouteObject[] = [
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <UserPage/>},
            {path: '/posts', element: <PostPage/>},
            {path: '/comments', element: <CommentPage/>}
        ]
    },

]
const routerConfig = createBrowserRouter(routes);
export {
    routerConfig
}