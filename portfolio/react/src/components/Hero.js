import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section animate-fade-in-up">
            <div className="hero-content">
                <h1 className="hero-title">
                    KANAKO TAGA<br/>
                    <span className="hero-subtitle">FULL-STACK DEVELOPER</span>
                </h1>
                <p className="hero-description">
                    Leveraging 9+ years of IT leadership (ex-AWS Senior Account Manager) to build scalable, customer-centric applications, with a long-term business mindset.
                </p>
                <div className="hero-cta animate-scale delay-2">
                    <a href="#projects" className="cta-button primary">View Projects</a>
                    <a href="#contact" className="cta-button secondary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
