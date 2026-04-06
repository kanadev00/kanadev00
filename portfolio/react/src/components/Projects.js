import { useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: "Reano",
        subtitle: "AI-Powered Home Design & AR Room Visualization App",
        period: "Jan 2026 - Apr 2026",
        icon: "🏠",
        image: "/img/reano-ad.webp",
        detailPage: "projects/reano.html",
        description: "A cross-platform mobile app (iOS & Android) that bridges the gap between interior design inspiration and real purchasing decisions. Users build AI-powered Style Boards from their inspiration photos, visualize furniture in their actual rooms via AR, and virtually repaint walls — turning scattered ideas into confident, spatial choices.",
        role: "Co-Project Lead / Product Planner / Full-Stack Developer",
        contributions: [
            "Shaped the core product vision from user research and competitive analysis into a focused MVP across a 12-week capstone timeline",
            "Led sprint planning and cross-team alignment between 4 developers and 7 designers",
            "Implemented AI furniture recommendation system using OpenAI text-embedding-3-small with cosine similarity ranking",
            "Built a custom React Native polling hook to withhold render until recommendation results are stable",
            "Contributed to furniture listing and filtering UI with recommendation ranking and profile-based preferences"
        ],
        techStack: [
            "React Native", "TypeScript", "Expo", "NativeWind", "TanStack Query",
            "Zustand", "Viro (AR)", "Hono", "Node.js", "Drizzle ORM",
            "PostgreSQL", "OpenAI API", "Replicate", "AWS EC2", "AWS S3", "PM2"
        ],
        links: {
            demo: "https://reano.pages.dev",
            github: "https://github.com/keipalg/reano"
        },
    },
    {
        id: 2,
        title: "Arvo",
        subtitle: "Product Management Platform for Handcraft Makers",
        period: "Sep 2025 - Nov 2025",
        icon: "🎨",
        image: "/img/arvo/arvo-ad.webp",
        detailPage: "projects/arvo.html",
        description: "A web application empowering solo handcraft entrepreneurs to transform creativity into sustainable business. This platform addresses the critical challenges of cost tracking, inventory valuation, and pricing decisions. By centralizing financial data with AI-driven insights, it helps makers track profitability, optimize pricing strategies, and reduce administrative burden—freeing them to focus on their craft.",
        role: "Product Manager / Co-Project Manager / Full-stack Developer",
        contributions: [
            "Led product planning and feature design with a customer-focused approach",
            "Provided significant contribution in analyzing and implementing business logic",
            "Delivered Product modules: Product Inventory Management, Production Batch and Production Cost Management",
            "Implemented price suggestion feature using AI (GPT-5 mini)"
        ],
        techStack: [
            "React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Tailwind CSS", "Google Cloud Storage", " Vite",
            "TanStack Query", "TanStack Router", "Chart.js",
            "Hono", "Drizzle ORM", "Better Auth",
        ],
        links: {
            demo: "https://wmdd-pj2-handcraft-23b18.web.app/",
            github: "https://github.com/keipalg/arvo"
        },
    },
    {
        id: 3,
        title: "Delista",
        subtitle: "Restaurant Menu Digitization Platform",
        period: "May 2025 - Jul 2025",
        icon: "🍽️",
        image: "/img/delista/delista-ad.webp",
        detailPage: "projects/delista.html",
        description: "B2B/B2C Web PWA for restaurant menu digitization. This solution accelerates digital transformation for restaurants using paper or PDF menus while addressing challenges faced by diners in Vancouver's diverse, multicultural food scene. It streamlines dining and menu management with real-time updates, dietary filters, and QR-accessible menus. It helps diners eat with confidence and restaurants manage with ease.",
        role: "Product Manager / Full-Stack Developer",
        contributions: [
            "Developed customer menu interface with favorites system and Google Maps integration",
            "Partnered with designers to define feature requirements and UI specifications",
            "Optimized user experience to minimize onboarding friction for both B2B (restaurant owners) and B2C (diners) users",
            "Created strategic business plan for future scalability"
        ],
        techStack: [
            "HTML", "CSS", "JavaScript", "Firebase", "GitHub"
        ],
        links: {
            demo: "https://langara-app.ca/projects/delista",
            github: null
        },
    },
    {
        id: 4,
        title: "Data for Good Vancouver Website",
        subtitle: "High UX Quality & Conversion Improvement",
        period: "Feb 2025 - Apr 2025",
        icon: "📈",
        image: "/img/dfg-website-renewal.png",
        detailPage: "projects/dfg.html",
        description: "Website renewal and content update project for Data for Good Vancouver designed to attract both clients and volunteers.",
        role: "UX/UI Designer / Frontend Web Developer",
        contributions: [
            "Redesigned information architecture and user flows based on stakeholder interviews",
            "Created custom visuals aligned with content to improve information absorption",
            "Reduced copy to essentials, minimizing drop-off before calls to action",
            "Delivered website renewal that increased inquiries by 4.5x",
        ],
        techStack: [
            "HTML", "CSS", "WordPress", "Figma", "Adobe Photoshop", "Adobe Illustrator"
        ],
        links: {
            demo: "https://vancouver.dataforgood.ca/",
            github: null
        },
    },
];

const ProjectCard = ({ project, index, onClick }) => {
    const handleClick = () => {
        if (project.detailPage) {
            window.location.href = project.detailPage;
        } else {
            onClick(project);
        }
    };

    return (
        <div
            className={`project-card animate-fade-in-up delay-${index + 1}`}
            onClick={handleClick}
        >
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-overlay">
                <div className="project-number">{String(project.id).padStart(2, '0')}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role-badge">{project.role}</p>
                <div className="project-tags">
                    {project.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                    {project.techStack.length > 5 && (
                        <span className="tag">+{project.techStack.length - 5}</span>
                    )}
                </div>
                <span className="project-period">{project.period}</span>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <div className="project-number">{String(project.id).padStart(2, '0')}</div>
                    <h2 className="project-title">{project.title}</h2>
                    <h3 className="project-subtitle">{project.subtitle}</h3>
                    <p className="project-period">{project.period}</p>
                </div>

                {project.image && (
                    <div className="modal-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                )}

                <div className="modal-body">
                    <p className="project-description">{project.description}</p>

                    <div className="project-role">
                        <strong>Role:</strong> {project.role}
                    </div>

                    <div className="project-contributions">
                        <strong>Key Contributions:</strong>
                        <ul>
                            {project.contributions.map((contribution, idx) => (
                                <li key={idx}>{contribution}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-tags">
                        <strong>Tech Stack:</strong>
                        <div className="tags-container">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-links">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Live Demo →
                            </a>
                        )}
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Code →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="featured-section" id="projects">
            <div className="section-header animate-fade-in-up">
                <div className="section-label">SELECTED PROJECTS</div>
                <h2 className="section-title">FEATURED WORK</h2>
            </div>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </section>
    );
};

export default Projects;
