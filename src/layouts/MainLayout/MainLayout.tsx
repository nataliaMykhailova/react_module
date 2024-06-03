import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

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