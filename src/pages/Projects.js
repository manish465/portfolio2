import { useState } from "react";

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tagList = [
        { name: "All", tabId: 0 },
        { name: "Frontend", tabId: 1 },
        { name: "Backend", tabId: 2 },
        { name: "Database", tabId: 3 },
    ];

    return (
        <section className="projects">
            <div className="button-filter-group">
                {tagList.map((tag, key) => (
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
        </section>
    );
};

export default Projects;
