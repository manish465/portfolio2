import { useEffect, useState } from "react";

import ProjectCards from "../components/ProjectCards";
import { projectDataList, tagDataList } from "../data";

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [projectList, setProjectList] = useState(projectDataList);

    useEffect(() => {
        if (activeTab === 0) setProjectList(projectDataList);
        else {
            const newList = projectDataList.filter((project) =>
                project.tags.includes(activeTab)
            );
            setProjectList(newList);
        }
    }, [activeTab]);

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
            <ProjectCards list={projectList} />
        </section>
    );
};

export default Projects;
