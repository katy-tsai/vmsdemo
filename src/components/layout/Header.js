import React from 'react';
import Searchbar from '../searchbar/Searchbar';
const Header = (props) => {
    return (
        <div className="header">
             <Searchbar placeholder="Channel name,Event Name..."/>
            
        </div>
    );
};

export default Header;