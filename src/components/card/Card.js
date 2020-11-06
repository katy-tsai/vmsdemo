import React from 'react';

const Card = ({ children, className, title }) => {
    return (
        <div className="card-div">
            <div className={["card", className].join(" ")}>
                <div className="card-title">{title}</div>
                <div className="card-body col-12">{children}</div>
            </div>
        </div>

    );
};

export default Card;