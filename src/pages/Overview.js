import {
    Banner,
    Contact,
    HorizontalScrollSection,
    TechSection,
} from "../components";
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
