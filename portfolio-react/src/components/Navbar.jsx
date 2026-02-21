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
                        <li className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    onChange={toggleTheme}
                                    checked={isDarkMode}
                                />
                                <div
                                    className="slider round"
                                    onMouseDown={(e) => {
                                        const startX = e.clientX;
                                        const handleMouseMove = (moveEvent) => {
                                            const diff = moveEvent.clientX - startX;
                                            if (Math.abs(diff) > 20) {
                                                if ((diff > 0 && !isDarkMode) || (diff < 0 && isDarkMode)) {
                                                    toggleTheme();
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                }
                                            }
                                        };
                                        const handleMouseUp = () => {
                                            document.removeEventListener('mousemove', handleMouseMove);
                                            document.removeEventListener('mouseup', handleMouseUp);
                                        };
                                        document.addEventListener('mousemove', handleMouseMove);
                                        document.addEventListener('mouseup', handleMouseUp);
                                    }}
                                    onTouchStart={(e) => {
                                        const startX = e.touches[0].clientX;
                                        const handleTouchMove = (moveEvent) => {
                                            const diff = moveEvent.touches[0].clientX - startX;
                                            if (Math.abs(diff) > 20) {
                                                if ((diff > 0 && !isDarkMode) || (diff < 0 && isDarkMode)) {
                                                    toggleTheme();
                                                    document.removeEventListener('touchmove', handleTouchMove);
                                                }
                                            }
                                        };
                                        const handleTouchEnd = () => {
                                            document.removeEventListener('touchmove', handleTouchMove);
                                            document.removeEventListener('touchend', handleTouchEnd);
                                        };
                                        document.addEventListener('touchmove', handleTouchMove);
                                        document.addEventListener('touchend', handleTouchEnd);
                                    }}
                                >
                                    <span className="slider-icon">{isDarkMode ? '🌙' : '☀️'}</span>
                                </div>
                            </label>
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
                        <li className="theme-switch-wrapper mobile-theme-switch">
                            <label className="theme-switch" htmlFor="mobile-checkbox">
                                <input type="checkbox" id="mobile-checkbox" onChange={() => { toggleTheme(); toggleMenu(); }} checked={isDarkMode} />
                                <div
                                    className="slider round"
                                    onMouseDown={(e) => {
                                        const startX = e.clientX;
                                        const handleMouseMove = (moveEvent) => {
                                            const diff = moveEvent.clientX - startX;
                                            if (Math.abs(diff) > 20) {
                                                if ((diff > 0 && !isDarkMode) || (diff < 0 && isDarkMode)) {
                                                    toggleTheme();
                                                    toggleMenu();
                                                    document.removeEventListener('mousemove', handleMouseMove);
                                                }
                                            }
                                        };
                                        const handleMouseUp = () => {
                                            document.removeEventListener('mousemove', handleMouseMove);
                                            document.removeEventListener('mouseup', handleMouseUp);
                                        };
                                        document.addEventListener('mousemove', handleMouseMove);
                                        document.addEventListener('mouseup', handleMouseUp);
                                    }}
                                    onTouchStart={(e) => {
                                        const startX = e.touches[0].clientX;
                                        const handleTouchMove = (moveEvent) => {
                                            const diff = moveEvent.touches[0].clientX - startX;
                                            if (Math.abs(diff) > 20) {
                                                if ((diff > 0 && !isDarkMode) || (diff < 0 && isDarkMode)) {
                                                    toggleTheme();
                                                    toggleMenu();
                                                    document.removeEventListener('touchmove', handleTouchMove);
                                                }
                                            }
                                        };
                                        const handleTouchEnd = () => {
                                            document.removeEventListener('touchmove', handleTouchMove);
                                            document.removeEventListener('touchend', handleTouchEnd);
                                        };
                                        document.addEventListener('touchmove', handleTouchMove);
                                        document.addEventListener('touchend', handleTouchEnd);
                                    }}
                                >
                                    <span className="slider-icon">{isDarkMode ? '🌙' : '☀️'}</span>
                                </div>
                            </label>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
