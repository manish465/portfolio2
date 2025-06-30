import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className='banner'>
            <article className='glass'>
                <h2>Hi, i'am Manish</h2>
                <p>
                    Tech enthusiast and Power Programmer, passionate about
                    building AL/ML, full-stack and frontend projects in my spare
                    time.
                </p>
                <div className='btn-group'>
                    <Link to='/projects'>
                        <button>My Projects</button>
                    </Link>
                    <a
                        href={require("../assets/Manish_Sahu_Software_Engineer.pdf")}
                    >
                        <button>My Resume</button>
                    </a>
                </div>
            </article>
        </section>
    );
};

export default Banner;
