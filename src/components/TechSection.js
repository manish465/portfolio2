import { techList } from "../data";

const TechSection = () => {
    return (
        <div className="tech-section">
            <h1 className="tech-heading">Skills</h1>
            <div className="tech-section-list">
                {techList.map((techItem, key) => (
                    <span className="tech" key={key}>
                        {techItem.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechSection;
