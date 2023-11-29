import React from 'react';
import  { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/photo">Photo</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;