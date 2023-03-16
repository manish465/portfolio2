import { Link } from "react-router-dom";

const menuItemList = [
    {
        title: "Overview",
        backgroundClassList: "background-pic pic-1",
        isDownloadable: false,
        path: "/",
    },
    {
        title: "Projects",
        backgroundClassList: "background-pic pic-2",
        isDownloadable: false,
        path: "/projects",
    },
    {
        title: "Career",
        backgroundClassList: "background-pic pic-3",
        isDownloadable: false,
        path: "/career",
    },
    {
        title: "Resume",
        backgroundClassList: "background-pic pic-4",
        isDownloadable: true,
    },
];

const MenuContent = () => {
    return (
        <section id="menu-content">
            {menuItemList.map((menuItem, key) => {
                return menuItem.isDownloadable ? (
                    <div key={key} class="card">
                        <div className={menuItem.backgroundClassList}></div>
                        <div className="shape-circle"></div>
                        <h3 className="title">{menuItem.title}</h3>
                        <i class="fa-sharp fa-solid fa-download"></i>
                        <h5>portfolio</h5>
                        <div className="random-icons">
                            <span>A</span>
                            <span>E</span>
                            <span>I</span>
                            <span>O</span>
                            <span>U</span>
                        </div>
                    </div>
                ) : (
                    <Link key={key} to={menuItem.path}>
                        <div key={key} class="card">
                            <div className={menuItem.backgroundClassList}></div>
                            <div className="shape-circle"></div>
                            <h3 className="title">{menuItem.title}</h3>
                            <i className="fa-solid fa-arrow-right"></i>
                            <h5>portfolio</h5>
                            <div className="random-icons">
                                <span>A</span>
                                <span>E</span>
                                <span>I</span>
                                <span>O</span>
                                <span>U</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
};

export default MenuContent;
