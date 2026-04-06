import React from 'react';

const techStackData = {
    languages: {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"]
    },
    frontend: {
        title: "Frontend",
        skills: ["React", "React Native", "Angular", "Tailwind CSS"]
    },
    backend: {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Hono", "Zod", "Next.js"]
    },
    database: {
        title: "Database",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Drizzle ORM", "Firestore"]
    },
    devops: {
        title: "DevOps & Tools",
        skills: ["Git", "AWS", "GitHub Actions"]
    },
    Others: {
        title: "Others",
        skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"]
    }
};

const TechStackCard = ({ category, data }) => {
    return (
        <div className="expertise-card animate-fade-in-up">
            <h3 className="expertise-title">{data.title}</h3>
            <div className="expertise-list">
                {data.skills.map((skill, index) => (
                    <React.Fragment key={skill}>
                        {skill}
                        {index < data.skills.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const coreCompetencies = [
    "Customer-First Product Thinking",
    "Product Strategy",
    "Project Management",
    "Agile Methodologies",
    "Cross-Functional Leadership",
    "Stakeholder Management",
    "Data Analysis",
    "User Research",
    "Technical Communication"
];

const TechStack = () => {
    return (
        <section className="expertise-section" id="expertise">
            <div className="section-header animate-fade-in-up">
                <div className="section-label">WHAT I DO</div>
                <h2 className="section-title">EXPERTISE</h2>
            </div>
            <div className="core-competencies-strip animate-fade-in-up delay-1">
                <div className="core-competencies-label">CORE COMPETENCIES</div>
                <div className="core-competencies-pills">
                    {coreCompetencies.map((item) => (
                        <span key={item} className="competency-pill">{item}</span>
                    ))}
                </div>
            </div>
            <div className="technical-skills-label animate-fade-in-up delay-2">TECHNICAL SKILLS</div>
            <div className="expertise-grid">
                {Object.entries(techStackData).map(([category, data]) => (
                    <TechStackCard key={category} category={category} data={data} />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
