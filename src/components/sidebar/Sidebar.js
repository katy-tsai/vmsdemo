import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogIcon from '../../scss/img/logo.png';
import MenuItems from './MenuItems';
import NavigationItem from './NavigationItem';
import MenuItemLabel from './MenuItemLabel';
import { ChartIcon, VideoIcon, DriveIcon, SetupIcon, BellIcon } from '../icons/Icons';

const Sidebar = (props) => {
    const [toggelMenu, setToogelMeue] = useState({ dashboard: false, video: false, devices: false });

    const toggleClick = (name) => {
        console.log(name);
        setToogelMeue({ ...toggelMenu, [name]: !toggelMenu[name] });
    }

    return (
        <div className="sidbar_div">
            <img src={LogIcon} alt="tutk" />
            <MenuItems>
                <MenuItemLabel toggleClick={() => toggleClick('dashboard')}><ChartIcon />Dashboard儀表板</MenuItemLabel>
                <MenuItems show={toggelMenu.dashboard} >
                    <NavigationItem link="/dashboard/login" exact>Login 登入次數</NavigationItem>
                    <NavigationItem link="/dashboard/event" >Event 事件統計</NavigationItem>
                    <NavigationItem link="/dashboard/device" >Device 裝置統計</NavigationItem>
                </MenuItems>
                <MenuItemLabel toggleClick={() => toggleClick('video')}><VideoIcon />View 監控管理</MenuItemLabel>
                <MenuItems show={toggelMenu.video}>
                    <NavigationItem link="/video/live" >Live 即時監控</NavigationItem>
                    <NavigationItem link="/video/schedule" >Schedule 排程 </NavigationItem>
                </MenuItems>
                <MenuItemLabel toggleClick={() => toggleClick('devices')}>
                    <NavLink to="/devices/states" activeClassName="active" >
                        <DriveIcon />Devices 裝置管理
                    </NavLink>
                </MenuItemLabel>
                <MenuItems show={toggelMenu.devices}>
                    <NavigationItem link="/devices/group" >Group 群組</NavigationItem>
                    <NavigationItem link="/devices/map" >Map 地圖設定 </NavigationItem>
                </MenuItems>
                <NavigationItem link="/event" ><BellIcon />Event 事件管理</NavigationItem>
                <NavigationItem link="/setup" ><SetupIcon />Setup 基本設定</NavigationItem>
            </MenuItems>
        </div>
    );
};

export default Sidebar;