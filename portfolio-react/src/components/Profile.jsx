import React from 'react';

function Profile() {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="/assets/Profile__.jpg" alt="KanishKhan profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">KanishKhan</h1>
                <p className="section__text__p2">Aspiring Web Developer | Pre-Final Year CSE Student</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open('/assets/KANISHKHANRESUME.pdf')}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <a href="https://www.linkedin.com/in/kanish-khan-688145253/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" />
                    </a>
                    <a href="https://github.com/Kanishkhan" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.png" alt="My Github profile" className="icon" />
                    </a>
                    <a href="https://leetcode.com/u/kanishkhan/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/leetcode_.png" alt="My LeetCode profile" className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Profile;
