import React from 'react';
import Header from './Header';
import Sidebar from '../Sidebar/Sidebar';
const Layout = (props) => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-container">
                <Header />
                <div className="main">
                {props.children}
                </div>               
            </div>
        </div>
    );
};

export default Layout;