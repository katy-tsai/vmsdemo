import React from 'react';

const MenuItemLabel = ({ toggleClick, children }) => {
    return (
        <li className="menu-label" onClick={toggleClick}>
            <div>
                {children}
            </div>
        </li>
    );
};

export default MenuItemLabel;