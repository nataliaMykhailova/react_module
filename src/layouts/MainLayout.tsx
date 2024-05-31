import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;