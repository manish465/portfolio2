import Banner from "../components/Banner";
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
            <section>1</section>
        </section>
    );
};

export default Overview;
