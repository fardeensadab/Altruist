import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import "./TopBar.css";

export function TopBar({ user, logout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [seeMoreOpen, setSeeMoreOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();

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
            <h1 onClick={()=>{navigate("/")}}><PiHandCoinsDuotone /> ClearAid</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <MdMenu />
            </div>
            <div className={menuOpen ? 'menu show' : 'menu'}>
                <Link to="/about">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <a href="/contact">Contact Us</a>
                <a href="/donate">Donate</a>
                {!user && <Link to="/login">Login</Link>}
                {user && <a onClick={logout}>Log Out</a>}
                {/* <div className="dropdown">
                    <a href="#" onClick={toggleSeeMore}>See More</a>
                    {seeMoreOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    )}
                </div> */}
            </div>
            <div>
                <button className={`search-button ${searchOpen ? 'active' : ''}`} onClick={toggleSearch}>
                    {searchOpen ? <MdClose /> : <FaSearch />}
                </button>
                {searchOpen && <input type="text" className="search-input" placeholder="Search..." />}
            </div>
        </nav>
    );
}
