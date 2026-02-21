import React from 'react';

function About() {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>

            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src="/assets/experience.png" alt="Experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>Front-end Development Intern <br />StaxTech, 1-Month Virtual Internship</p>
                        </div>
                        <div className="details-container">
                            <img src="/assets/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Tech in Computer Science Engineering<br />Pre-Final Year Student</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I am a Computer Science Engineering student with a strong interest in web development and data-driven
                            problem solving. I enjoy creating applications that are user-focused, efficient, and aligned with business
                            needs. I am passionate about understanding how data and technology support decision-making and enhance
                            real-world solutions. I learn quickly, work well in collaborative environments, and consistently aim to
                            contribute to meaningful and scalable projects.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = '#experience')}
            />
        </section>
    );
}

export default About;
