import React from 'react';

function Experience() {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Full Stack Development</h2>
                        <div className="article-container">
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>HTML, CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>React</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Node.js</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Express.js</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>SQL</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Programming Languages</h2>
                        <div className="article-container">
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>C</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Python</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Java</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                                <div>
                                    <h3>C++</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = '#certifications')}
            />
        </section>
    );
}

export default Experience;
