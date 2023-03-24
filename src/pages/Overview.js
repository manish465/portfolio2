import Banner from "../components/Banner";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TableSection from "../components/TableSection";
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
            <TableSection />
        </section>
    );
};

export default Overview;
