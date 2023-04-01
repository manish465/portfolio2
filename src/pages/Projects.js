import { useState } from "react";
import { projectDataList, tagDataList } from "../data";

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="projects">
            <div className="button-filter-group">
                {tagDataList.map((tag, key) => (
                    <button
                        key={key}
                        className={
                            activeTab === tag.tabId
                                ? "filter-button active"
                                : "filter-button"
                        }
                        onClick={() => setActiveTab(tag.tabId)}
                    >
                        {tag.name}
                    </button>
                ))}
            </div>
            <div className="project-list">
                {projectDataList.map((project, key) => (
                    <div key={key} className="project">
                        <img src={project.img} alt={project.name} />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">
                            {project.description}
                        </p>
                        <ul className="project-tags">
                            {project.tags.map((tag, tagKey) => (
                                <li key={tagKey} className="tag">
                                    {"#" + tag}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
