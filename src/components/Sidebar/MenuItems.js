import React from 'react';

const MenuItems = (props) => {
    return (
        <ul className="menu-container">
             {props.label&&<div>{props.label}</div>}
            {props.children}
        </ul>
    );
};

export default MenuItems;