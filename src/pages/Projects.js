import { useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { tagDataList } from "../data";

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
            <ProjectCards />
        </section>
    );
};

export default Projects;
