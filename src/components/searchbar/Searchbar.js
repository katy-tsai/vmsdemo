import React from 'react';

const Searchbar = ({placeholder}) => {
    return (
        <div className="search-div">
            <div className="input-wrapper">
                <input type="text" placeholder={placeholder} />
                <button className="search-btn"></button>
            </div>

        </div>
    );
};

export default Searchbar;