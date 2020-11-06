import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="search-div">
            <div className="input-wrapper">
                <input type="text" placeholder="Channel name,Event Name..." />
                <button className="search-btn"></button>
            </div>

        </div>
    );
};

export default Searchbar;