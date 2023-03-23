import { Link } from "react-router-dom";
import HorizontalScrollSection from "../components/HorizontalScrollSection";

const Overview = () => {
    return (
        <section id="overview">
            <section className="banner">
                <article className="glass">
                    <h2>Hi, i'am Manish</h2>
                    <p>
                        A tech enthusiast, currently working as Quality
                        Assurance Engineer. I also work on some full stack
                        projects and frontend projects.
                    </p>
                    <div className="btn-group">
                        <Link to="/projects">
                            <button>My Projects</button>
                        </Link>
                        <Link>
                            <button>My Resume</button>
                        </Link>
                    </div>
                </article>
            </section>
            <HorizontalScrollSection />
        </section>
    );
};

export default Overview;
