const ProjectCard = ({ key, project }) => {
    return (
        <div key={key} className="project">
            <img src={project.img} alt={project.name} />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tags">
                {project.tags.map((tag, tagKey) => (
                    <li key={tagKey} className="tag">
                        {"#" + tag}
                    </li>
                ))}
            </ul>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
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
    );
};

export default ProjectCard;
