import { useContext } from "react";
import { appContext } from "../context/AppContext";

const TechSection = ({ heading, data }) => {
    const { setImage } = useContext(appContext);

    return (
        <div className="tech-section">
            <h1 className="tech-heading">{heading}</h1>
            <div className="tech-section-list">
                {data.map((item, key) => (
                    <span
                        className="tech"
                        key={key}
                        onMouseEnter={() => setImage(item.image)}
                        onMouseLeave={() => setImage("")}
                    >
                        {item.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechSection;
