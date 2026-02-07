import React, { useState } from 'react';

function Navbar({ toggleTheme, isDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">KanishKhan</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li id="theme-toggle" onClick={toggleTheme}>
                            <span id="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">KanishKhan</div>
                <div className="hamburger-menu">
                    <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); toggleTheme(); toggleMenu(); }}>
                            {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
                        </a></li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
