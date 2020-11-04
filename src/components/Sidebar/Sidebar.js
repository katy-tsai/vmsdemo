import React from 'react';
import LogIcon from '../../scss/img/logo.png';
import MenuItems from './MenuItems';
import NavigationItem from './NavigationItem';
import { IconContext } from "react-icons";
import {AiOutlineDashboard} from 'react-icons/ai';
const Sidebar = (props) => {
    const iconSize="1.5em";
    return (
        <div className="sidbar_div">            
            <img src={LogIcon} alt="tutk" />
           
            <MenuItems>
                <NavigationItem link="/" exact><AiOutlineDashboard size={iconSize} />Dashboard</NavigationItem>               
                <MenuItems  label="設定">                  
                    <NavigationItem link="/" exact>Dashboard</NavigationItem> 
                </MenuItems>
               
            </MenuItems>
        </div>
    );
};

export default Sidebar;