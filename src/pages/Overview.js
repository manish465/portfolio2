import Banner from "../components/Banner";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TechSection from "../components/TechSection";
import { skillData } from "../data";

const Overview = () => {
    const horizontalComponentList = [
        <TechSection heading={skillData.heading} data={skillData.techList} />,
    ];

    return (
        <section id="overview">
            <Banner />
            <HorizontalScrollSection
                horizontalComponentList={horizontalComponentList}
            />
        </section>
    );
};

export default Overview;
