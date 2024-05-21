import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";


export const routerConfig = createBrowserRouter([
    {path: '/',  element:<MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>,
                children:[
                    {path: ':userId/posts', element:<PostsPage/>,
                        children:[
                            {path: ':postId', element: <CommentsPage/>}
                        ]}
                ]},
            {path: 'users#user-:id', element:<UsersPage/>},
            {path: 'posts', element: <PostsPage/>,
                children:[
                    {path: ':postId', element: <CommentsPage/>}
                ]},
            {path: 'comments', element: <CommentsPage/>},

        ]
    }
])