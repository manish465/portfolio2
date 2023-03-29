const TechSection = ({ heading, data, setImage }) => {
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
