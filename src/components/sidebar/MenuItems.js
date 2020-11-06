import React from 'react';

const MenuItems = ({ show = true, children }) => {
    return (
        <ul className={[show ? "" : "hide", "menu-container"].join(" ")}>
            {children}
        </ul>
    );
};

export default MenuItems;