import React, { useState } from "react";
import {FaSearch } from 'react-icons/fa'; // Importing specific icons

import './TopBar.css'; // Import the CSS file

export function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu toggle
    const [seeMoreOpen, setSeeMoreOpen] = useState(false); // State to manage "See More" dropdown
    const [searchOpen, setSearchOpen] = useState(false); // State to manage search bar toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the main menu
    };

    const toggleSeeMore = () => {
        setSeeMoreOpen(!seeMoreOpen); // Toggle the "See More" dropdown
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen); // Toggle the search bar
    };

    return (
        <nav>
            <h1>ClearAid</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={menuOpen ? 'menu show' : 'menu'}>
                <a href="/about">About Us</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact Us</a>
                <a href="/donate">Donate</a>
                <a href="/login">Login</a>
                <div className="dropdown">
                    <a href="#" onClick={toggleSeeMore}>See More</a>
                    {seeMoreOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <button className={`search-button ${searchOpen ? 'active' : ''}`} onClick={toggleSearch}>
                {searchOpen ? 'Close' :  <FaSearch /> }
            </button>
            {searchOpen && <input type="text" className="search-input" placeholder="Search..." />}
        </nav>
    );
}
