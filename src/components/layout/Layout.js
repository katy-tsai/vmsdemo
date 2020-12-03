import React from 'react';
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';
import useRWD from '../../hooks/useRWD';
const Layout = ({loginUser,children}) => {
    const [isSidebarOpen,setIsSidebarOpen]=useRWD();
    
    const toggleClickHandler = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className={["wrapper",isSidebarOpen?"show":"close"].join(" ")}> 
        <Header toggleClick={toggleClickHandler} />           
            <div className="main-container">                       
                <div className="main">        
                <Sidebar user={loginUser}/>
                {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;