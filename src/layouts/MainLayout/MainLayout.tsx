import React from 'react';
import {Provider} from "react-redux";

import CounterPage from "../../pages/CounterPage/CounterPage";
import {store} from "../../redux/store";

const MainLayout = () => {
    return (
        <div>
            <Provider store={store}>
            <CounterPage/>
                </Provider>
        </div>
    );
};

export default MainLayout;