import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import CarsPage from "../pages/CarsPage/CarsPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import CreateCarComponent from "../components/CreateCarComponent/CreateCarComponent";

const routerConfig = createBrowserRouter([
    {path:"/", element:<MainLayout/>,
    errorElement: <ErrorLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'auth', element:<AuthPage/>},
        {path:'registration', element:<RegistrationPage/>},
        {path:'cars', element:<CarsPage/>},

    ]}
])

export {
    routerConfig
}