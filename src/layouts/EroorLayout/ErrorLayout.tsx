import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Display error!!!! </h1>
            <h2>Your route is incorrect! Check and try again!</h2>
        </div>
    );
};

export default ErrorLayout;