import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className='banner'>
      <article className='glass'>
        <h2>Hi, i'am Manish</h2>
        <p>
          A tech enthusiast, currently working as Quality Assurance Engineer. I
          also work on some full stack projects and frontend projects.
        </p>
        <div className='btn-group'>
          <Link to='/projects'>
            <button>My Projects</button>
          </Link>
          <a href={require("../assets/Manish_Sahu_Software_Engineer.pdf")}>
            <button>My Resume</button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Banner;
