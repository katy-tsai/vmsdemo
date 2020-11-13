import React from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaRegFileVideo } from 'react-icons/fa';
import { FiHardDrive } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import { GoDiffAdded } from 'react-icons/go';
import { RiDeleteBin5Line } from 'react-icons/ri';
import SetupSvg from '../../scss/img/setup.svg';
export const ChartIcon = (props) => (
    <i className="icons">
        <AiOutlineAreaChart {...props} />
    </i>
);

export const VideoIcon = (props) => (
    <i className="icons">
        <FaRegFileVideo {...props} />
    </i>
)

export const DriveIcon = (props) => (
    <i className="icons">
        <FiHardDrive {...props} />
    </i>
)

export const SetupIcon = (props) => (
    <i className="icons">
        <img src={SetupSvg} alt="setup" {...props} />
    </i>
)

export const BellIcon = (props) => (
    <i className="icons">
        <BsBell {...props} />
    </i>
)

export const AddIcon = (props) => (
    <i className="icons">
        <GoDiffAdded {...props} />
    </i>
)

export const DeleteIcon = (props) => (
    <i className="icons" >
        <RiDeleteBin5Line {...props} />
    </i>
)