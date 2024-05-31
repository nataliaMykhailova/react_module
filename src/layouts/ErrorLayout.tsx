import React from 'react';
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Display error!!!!</h1>
            <FooterComponent/>

        </div>
    );
};

export default ErrorLayout;