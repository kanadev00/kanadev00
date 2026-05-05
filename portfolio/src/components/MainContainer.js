import Hero from './Hero.js';
import About from './About.js';
import TechStack from './TechStack.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const MainContainer = () => {
    return (
        <main className="main-container">
            <Hero />
            <Projects />
            <TechStack />
            <About />
            <Contact />
            <Footer />
        </main>
    );
};

export default MainContainer;