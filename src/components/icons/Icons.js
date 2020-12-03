import React from 'react';
import { AiOutlineAreaChart,AiOutlineLogout } from 'react-icons/ai';
import { FaRegFileVideo } from 'react-icons/fa';
import { FiHardDrive ,FiMenu} from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import { GoDiffAdded } from 'react-icons/go';
import { RiDeleteBin5Line } from 'react-icons/ri';
import SetupSvg from '../../scss/img/setup.svg';
import LogoPng from '../../scss/img/logo.png';
import ImgUploadSvg from '../../scss/img/imgUpload.svg';
export const ImgUpload = (props) => (
    <img src={ImgUploadSvg} alt="upload" title="upload" {...props} />
)

export const LogOutIcon = (props) => (
    <i className="icons">
        <AiOutlineLogout {...props} />
    </i>
);

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
export const LogoIcon = (props) => (
    <i className="icons">
        <img src={LogoPng} alt="tutk" {...props} />
    </i>
)

export const MenuIcon = ({toggleClick,className,...props}) => (
    <i className={["icons",className].join(" ")} onClick={toggleClick} >
        <FiMenu {...props} />
    </i>
)