import React from 'react';

const View = ({ title, children }) => {
    return (
        <div className="view-div">
            <div className="title">{title}</div>
            <div>{children}</div>
        </div>
    );
};

export default View;