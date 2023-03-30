import Banner from "../components/Banner";
import Contact from "../components/Contact";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TechSection from "../components/TechSection";

import { skillData, toolsData } from "../data";

const Overview = () => {
    const horizontalComponentList = [
        <TechSection heading={skillData.heading} data={skillData.techList} />,
        <TechSection heading={toolsData.heading} data={toolsData.techList} />,
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
