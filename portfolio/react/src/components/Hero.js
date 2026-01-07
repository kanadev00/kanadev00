import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const colors = ['#2B5CE6', '#D97757', '#8B8B8B']; // blue, orange, gray from site palette
        const dots = [];
        const mousePos = { x: 0, y: 0 };
        const dotCount = 15;

        // Create dots
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'mouse-dot';
            dot.style.backgroundColor = colors[i % colors.length];
            hero.appendChild(dot);

            dots.push({
                element: dot,
                x: 0,
                y: 0,
                targetX: 0,
                targetY: 0,
                delay: i * 0.03
            });
        }

        dotsRef.current = dots;

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            mousePos.x = e.clientX - rect.left;
            mousePos.y = e.clientY - rect.top;
        };

        // Animation loop
        let animationFrameId;
        const animate = () => {
            dots.forEach((dot, index) => {
                // Each dot follows the previous one (or the mouse for the first dot)
                if (index === 0) {
                    dot.targetX = mousePos.x;
                    dot.targetY = mousePos.y;
                } else {
                    dot.targetX = dots[index - 1].x;
                    dot.targetY = dots[index - 1].y;
                }

                // Smooth interpolation
                const speed = 0.15 - (index * 0.005); // Gradually slower for trailing effect
                dot.x += (dot.targetX - dot.x) * speed;
                dot.y += (dot.targetY - dot.y) * speed;

                // Update position
                dot.element.style.left = `${dot.x}px`;
                dot.element.style.top = `${dot.y}px`;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        hero.addEventListener('mousemove', handleMouseMove);
        animate();

        // Cleanup
        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            dots.forEach(dot => {
                if (dot.element.parentNode) {
                    dot.element.parentNode.removeChild(dot.element);
                }
            });
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
