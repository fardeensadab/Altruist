import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './TopBar.css';

export function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [seeMoreOpen, setSeeMoreOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSeeMore = () => {
        setSeeMoreOpen(!seeMoreOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
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
                <Link to="/about">About Us</Link>
                <Link to="/faq">FAQ</Link>
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
