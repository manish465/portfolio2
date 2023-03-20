const Overview = () => {
    return (
        <section id="overview" data-scroll-section>
            <section className="welcome">
                <div className="welcome-section">
                    <h1>Welcome</h1>
                </div>
                <div
                    className="secondary-container glass"
                    data-scroll
                    data-scroll-speed="2"
                ></div>
                <div
                    className="overview-banner glass"
                    data-scroll
                    data-scroll-speed="-4"
                >
                    <h2>Hi, i'am Manish</h2>
                    <p>
                        A tech enthusiast, currently working as Quality
                        Assurance Engineer. I also work on some full stack
                        projects and frontend projects.
                    </p>
                    <div className="btn-group">
                        <button>My Projects</button>
                        <button>My Resume</button>
                    </div>
                </div>
            </section>
            <section className="intermidiate"></section>
            <section className="welcome-2">snap</section>
        </section>
    );
};

export default Overview;
