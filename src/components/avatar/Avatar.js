import React from 'react';
import {LogOutIcon} from '../icons/Icons';
const Avatar = ({ user }) => {
  console.log(user);
  
  return (
    <div className="avatar-div">
      <div name={user.userName.slice(0,1).toUpperCase()} className="avatar-img"></div>
      <div className="avatar-txt">
        <b>{user.displayName}</b>
        <span>{user.userName}</span>
        <span>{user.role}</span>
      </div>
      <div className="avatar-logout">
        <LogOutIcon/><span>登出</span>
      </div>
    </div>
  );
};

export default Avatar;