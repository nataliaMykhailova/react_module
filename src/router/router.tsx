import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";

const routes:RouteObject[] = [
    {path: '/', element:<MainLayout/>}
]

const routerConfig = createBrowserRouter(routes);

export {
    routerConfig
}