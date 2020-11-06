import React from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaRegFileVideo } from 'react-icons/fa';
import { FiHardDrive } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import SetupSvg from '../../scss/img/setup.svg';
export const ChartIcon = () => (
    <i className="icons">
        <AiOutlineAreaChart />
    </i>
);

export const VideoIcon = () => (
    <i className="icons">
        <FaRegFileVideo />
    </i>
)

export const DriveIcon = () => (
    <i className="icons">
        <FiHardDrive />
    </i>
)

export const SetupIcon = () => (
    <i className="icons">
        <img src={SetupSvg} alt="setup" />
    </i>
)

export const BellIcon = () => (
    <i className="icons">
        <BsBell />
    </i>
)