import React from 'react';

import Searchbar from '../search-bar';

const Navbar = () => {
    return <header className="nav">
        <div className="title">
            <i className="fa fa-empire icon" aria-hidden="true"></i>
            Food App
        </div>
        <Searchbar />
        <div className="title">
            <i className="fa fa-map-marker icon" aria-hidden="true"></i>
            chennai
        </div>
        <div className="title">
            <i className="fa fa-user-circle icon" aria-hidden="true"></i>
            User
        </div>
    </header>
}

export default Navbar;