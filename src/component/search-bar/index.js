import React from 'react';

const Searchbar = () => {
    return <span style={{ borderBottom: '2px solid white', width: '300px' }}>
        <i className="fa fa-search icon" aria-hidden="true"></i>
        <input type="text" className="searchbar" placeholder="search" />
    </span>
}

export default Searchbar;