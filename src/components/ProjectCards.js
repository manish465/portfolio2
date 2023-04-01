import { projectDataList, tagDataList } from "../data";

const ProjectCards = () => {
    return (
        <div className="project-list">
            {projectDataList.map((project, key) => (
                <div key={key} className="project">
                    <div className="background-alpha glass"></div>
                    <img src={project.img} alt={project.name} />
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags">
                        {project.tags.map((tag, tagKey) => (
                            <li key={tagKey} className="tag">
                                {"#" + Object.values(tagDataList)[tag].name}
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
    );
};

export default ProjectCards;
