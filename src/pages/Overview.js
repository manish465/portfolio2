import Banner from "../components/Banner";
import Contact from "../components/Contact";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TechSection from "../components/TechSection";

import { skillData, toolsData } from "../data";

const Overview = ({ setImage }) => {
    const horizontalComponentList = [
        <TechSection
            heading={skillData.heading}
            data={skillData.techList}
            setImage={setImage}
        />,
        <TechSection
            heading={toolsData.heading}
            data={toolsData.techList}
            setImage={setImage}
        />,
    ];

    return (
        <section id="overview">
            <Banner />
            <HorizontalScrollSection
                horizontalComponentList={horizontalComponentList}
            />
            <Contact />
        </section>
    );
};

export default Overview;
