import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import {LogoIcon ,MenuIcon} from '../icons/Icons';
const Header = ({toggleClick}) => {
    return (
        <div className="header">
            <div className="header-logo">
                <MenuIcon size={30} toggleClick={toggleClick} className="border-icon"/>
                <LogoIcon />
            </div>
            <div className="header-searchbar">
                <Searchbar placeholder="Channel name,Event Name..."/>
            </div>
            
            
        </div>
    );
};

export default Header;