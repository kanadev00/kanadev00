import React from 'react';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-header animate-fade-in-up">
                <div className="section-label">BACKGROUND</div>
                <h2 className="section-title">ABOUT ME</h2>
            </div>
            <div className="about-content-wrapper animate-fade-in-up delay-1">
                <div className="about-text">
                    <p>
                        Product Manager and Full-Stack Developer who bridges business strategy with technical execution. With 9 years in the IT industry, I combine a 'Customer-Obsessed' approach with deep technical insight to build products that balance sophisticated User Experience with long-term business scalability. I thrive in cross-functional environments, collaborating with engineering, product, and business development teams to maximize output and deliver high-impact solutions.
                    </p>
                    <h3 className='about-experience-header'>Experience</h3>
                    <h4>Senior Account Manager, Amazon Web Services (AWS) Japan G.K. (2018 – 2024)</h4>

                    <p className='about-experience-text'>
                        Managed a diverse portfolio from high-growth startups to large enterprise groups.
                        Deep domain expertise in AdTech, E-commerce, and Fintech industries.
                    </p>
                    <h4>

                        Enterprise Sales (ERP Packages), IT Sector (2015 – 2017)
                    </h4>
                    <p className='about-experience-text'>

                        Focused on HR, Accounting, Supply Chain Management (SCM), and E-commerce solutions for enterprise-level clients.
                    </p>
                </div>
                <div className="about-photo">
                    <div className="profile-photo-frame">
                        <img src="/img/profile-photo.webp" alt="Kanako Taga - Full Stack Developer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
