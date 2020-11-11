import React from 'react';
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';
const Layout = (props) => {
    return (
        <div className="wrapper">
            <div className="left-container">
               <Sidebar />
            </div>           
            <div className="main-container">
                
                <div className="main">
                <Header />
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Layout;