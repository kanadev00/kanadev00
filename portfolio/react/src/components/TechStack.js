import React from 'react';

const techStackData = {
    languages: {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"]
    },
    frontend: {
        title: "Frontend",
        skills: ["React", "Angular", "Tailwind CSS"]
    },
    backend: {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Hono", "Zod", "Next.js"]
    },
    database: {
        title: "Database",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Drizzle ORM"]
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

const TechStack = () => {
    return (
        <section className="expertise-section" id="expertise">
            <div className="section-header">
                <div className="section-label">WHAT I DO</div>
                <h2 className="section-title">TECHNICAL EXPERTISE</h2>
            </div>
            <div className="expertise-grid">
                {Object.entries(techStackData).map(([category, data]) => (
                    <TechStackCard key={category} category={category} data={data} />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
