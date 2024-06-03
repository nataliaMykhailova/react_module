import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import CarsPage from "../pages/CarsPage/CarsPage";

const routerConfig = createBrowserRouter([
    {path:'/', element: <MainLayout/>,
    errorElement: <ErrorLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'registration', element: <RegistrationPage/>},
        {path:'auth', element:<AuthPage/>},
        {path:'cars', element:<CarsPage/>},

    ]}
])
export {
    routerConfig
}