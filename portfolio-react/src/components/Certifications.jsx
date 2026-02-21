import React from 'react';

function Certifications() {
    return (
        <section id="certifications">
            <p className="section__text__p1">Achievements & Learning</p>
            <h1 className="title">Certifications</h1>

            <div className="certifications-container">
                <a href="/assets/Oracle_gen_ai.pdf" target="_blank" rel="noopener noreferrer" className="certificate-card">
                    <h3>Oracle Certified Professional – Generative AI</h3>
                    <p>Issued by Oracle University — 2025</p>
                </a>

                <a href="/assets/Internshala.pdf" target="_blank" rel="noopener noreferrer" className="certificate-card">
                    <h3>Web Development with AI Training</h3>
                    <p>Issued by Internshala Trainings — 2024</p>
                </a>

                <a href="/assets/DSA_Udemy.pdf" target="_blank" rel="noopener noreferrer" className="certificate-card">
                    <h3>Completed Data Structures & Algorithms in Python</h3>
                    <p>Issued by Udemy — 2023</p>
                </a>

                <a href="/assets/AWS_DE_.pdf" target="_blank" rel="noopener noreferrer" className="certificate-card">
                    <h3>AWS Academy Data Engineering</h3>
                    <p>Issued by AWS Academy — 2025</p>
                </a>

                <a href="/assets/AWS_ACA.pdf" target="_blank" rel="noopener noreferrer" className="certificate-card">
                    <h3>AWS Academy Cloud Architecting</h3>
                    <p>Issued by AWS Academy — 2024</p>
                </a>
            </div>

            <img
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = '#projects')}
            />
        </section>
    );
}

export default Certifications;
