import { useState } from "react";
import { motion } from "framer-motion";

import useMousePosHook from "../hooks/useMousePosHook";

const TechSection = ({ heading, data }) => {
    const [image, setImage] = useState("");

    const mousePos = useMousePosHook();

    return (
        <div className="tech-section">
            <h1 className="tech-heading">{heading}</h1>
            <motion.div
                className={image === "" ? "techImage" : "techImage reveal"}
                animate={{
                    x: mousePos.x - 650,
                    y: mousePos.y - 450,
                }}
            >
                {image !== "" && <img src={image} alt="background" />}
            </motion.div>
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
