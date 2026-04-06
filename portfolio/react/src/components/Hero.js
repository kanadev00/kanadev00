import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const colors = ['#2B5CE6', '#D97757', '#8B8B8B']; // blue, orange, gray from site palette
        let colorIndex = 0;
        let lastRippleTime = 0;

        const handleMouseMove = (e) => {
            const now = Date.now();
            if (now - lastRippleTime < 80) return; // throttle to ~12 ripples/sec
            lastRippleTime = now;

            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.backgroundColor = colors[colorIndex % colors.length];
            colorIndex++;

            hero.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        };

        hero.addEventListener('mousemove', handleMouseMove);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section ref={heroRef} className="hero-section animate-fade-in-up">
            <div className="hero-content">
                <h1 className="hero-title">
                    KANAKO TAGA
                </h1>
                <div className="hero-roles">
                    <span className="hero-role">PRODUCT MANAGER</span>
                    <span className="hero-role-divider">•</span>
                    <span className="hero-role">FULL-STACK DEVELOPER</span>
                </div>
                <p className="hero-description">
                    Leveraging 9+ years of IT leadership to build scalable, customer-centric applications, with a long-term business mindset.
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
