import React, { useState } from 'react';
import projects from '../data/projects.json';
import petprojects from '../data/petprojects.json';
import Title from '../components/title';

interface TechStack {
    name: string;
    icon: string;
}

interface Project {
    name: string;
    image: string;
    description: string;
    github: string;
    live?: string;
    techstack: TechStack[];
}

const Projects: React.FC = () => {
    const [hoveredGithubIndex, setHoveredGithubIndex] = useState<number | null>(null);
    const [hoveredLiveIndex, setHoveredLiveIndex] = useState<number | null>(null);

    const handleGithubMouseEnter = (index: number) => setHoveredGithubIndex(index);
    const handleGithubMouseLeave = () => setHoveredGithubIndex(null);

    const handleLiveMouseEnter = (index: number) => setHoveredLiveIndex(index);
    const handleLiveMouseLeave = () => setHoveredLiveIndex(null);

    // Combine projects and pet projects
    const combinedProjects: { category: string; projects: Project[] }[] = [
        { category: 'Recent Projects', projects },
        { category: 'Pet Projects', projects: petprojects }
    ];

    return (
        <div className="mt-20 mb-10">
            {combinedProjects.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <Title first={section.category.split(' ')[0]} second={section.category.split(' ')[1]} />
                    <br />
                    {section.projects.map((project, index) => (
                        <div className="flex gap-5 mb-14" key={index}>
                            {/* Project Image */}
                            <div className="projectImage w-[300px] h-[170px] flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="rounded-lg w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="projectDetails flex flex-col justify-between">
                                <div className="projectHeading flex items-center justify-between">
                                    <h3 className="font-semibold text-3xl">{project.name}</h3>
                                    <div className="flex gap-6">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 flex items-center"
                                                onMouseEnter={() => handleGithubMouseEnter(index)}
                                                onMouseLeave={handleGithubMouseLeave}
                                            >
                                                github
                                                <span
                                                    className={`inline-block transition-transform duration-300 ${hoveredGithubIndex === index
                                                        ? 'transform -translate-y-1 translate-x-1 font-extrabold'
                                                        : 'font-medium'
                                                        }`}
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 flex items-center"
                                                onMouseEnter={() => handleLiveMouseEnter(index)}
                                                onMouseLeave={handleLiveMouseLeave}
                                            >
                                                live
                                                <span
                                                    className={`inline-block transition-transform duration-300 ${hoveredLiveIndex === index
                                                        ? 'transform -translate-y-1 translate-x-1 font-extrabold'
                                                        : 'font-medium'
                                                        }`}
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-snug font-light">{project.description}</p>
                                <div className="flex gap-2 ">
                                    {project.techstack.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center text-gray-600 text-sm font-medium gap-1"
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-4 h-4"
                                            />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Projects;
