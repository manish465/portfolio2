import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const HorizontalScrollSection = ({ horizontalComponentList }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const container = gsap.utils.toArray("section.horizontal-section");

        const ctx = gsap.fromTo(
            container,
            { translateX: 0 },
            {
                translateX: -100 * (container.length - 1) + "%",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: "section.horizontal-container",
                    end: 500 * container.length + " top",
                    scrub: 1,
                    pin: true,
                    snap: 1 / (container.length - 1),
                },
            }
        );

        return () => ctx.kill();
    }, []);

    return (
        <section className="horizontal-container">
            {horizontalComponentList.map((component, key) => (
                <section className="horizontal-section" key={key}>
                    {component}
                </section>
            ))}
        </section>
    );
};

export default HorizontalScrollSection;
