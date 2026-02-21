import React from 'react';

function Projects() {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">

                {/* Row 1 */}
                <div className="about-containers">
                    {/* Project 1 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/Project1.jpg" alt="Project 1" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Supply Chain</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/Suppy_chain', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://supply-chain-blockchain.netlify.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/Project2.jpg" alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Resource Scheduling</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/Edge-Data-Processing-Platform', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://marina-drive-dashboard.netlify.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/secure.png" alt="Project 3" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">SecureSubmit</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/secure-assignment-system', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://secure-assignment-system.vercel.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="about-containers">
                    {/* Project 4 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/Project4.jpg" alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Text Inter Engine</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/textintel-engine', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://text-intel-engine.netlify.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/Project6.png" alt="User Interface Design" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">User Interface Design</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/User-Interface-Design-Project', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://nrgk-fashion.netlify.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="/assets/Project6.jpg" alt="Project 6" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">CPU Scheduler</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Kanishkhan/CPU-Scheduler-Simulator', '_blank')}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://cpu-optimizer.netlify.app/', '_blank')}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = '#contact')}
            />
        </section>
    );
}

export default Projects;
