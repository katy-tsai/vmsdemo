import React from 'react';
import Header from './Header';
import Sidebar from '../Sidebar/Sidebar';
const Layout = (props) => {
    return (
        <div className="container">
            {/* <Sidebar />
            <div className="main-container">
                <Header />
                <div className="main">
                {props.children}
                </div>               
            </div> */}
            <div className="row">
            <div className=" col-3">sidebar</div>
            <div className=" col-9">main</div>
            </div>
           
        </div>
    );
};

export default Layout;