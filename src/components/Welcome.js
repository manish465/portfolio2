import GlitchText from "./GlitchText";
import ScrollDown from "./ScrollDown";

const Welcome = () => {
    return (
        <div id="welcome-page">
            <section className="wrapper">
                <GlitchText>Welcome</GlitchText>
                <ScrollDown />
            </section>
        </div>
    );
};

export default Welcome;
