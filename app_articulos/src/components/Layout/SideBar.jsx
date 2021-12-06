import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <nav className="sidebar">
            <h1>Artículos<span>App</span> </h1>
            <Link to="/">artículos</Link>
         
        </nav>

    );
}

export default SideBar;