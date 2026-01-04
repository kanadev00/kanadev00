import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <p className="animate-fade-in-up delay-1">
                Have a project in mind? 
                Let's discuss how we can work together.
            </p>
            <div className="contact-buttons animate-scale delay-2">
                <a href="https://www.linkedin.com/in/kanako-taga-191363159/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="contact-button">
                    Connect on LinkedIn
                </a>
                <a href="https://github.com/kanadev00"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="contact-button secondary">
                    View GitHub
                </a>
            </div>
        </section>
    );
};

export default Contact;
