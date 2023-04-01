import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
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
                    <ProjectCard key={key} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
