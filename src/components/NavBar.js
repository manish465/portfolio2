import { Link } from "react-router-dom";
import MenuIcon from "../assets/icons/MenuIcon";

const menuLinkList = [
    {
        title: "Overview",
        path: "/",
        isDownloadable: false,
    },
    {
        title: "Projects",
        path: "/projects",
        isDownloadable: false,
    },
    {
        title: "Career",
        path: "/career",
        isDownloadable: false,
    },
    {
        title: "Resume",
        isDownloadable: true,
    },
];

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header id="nav-bar">
            <div className="wrapper">
                <h1>
                    <Link to="/">System.out.println("Hello")</Link>
                </h1>
                <ul>
                    {menuLinkList.map((menuLinkItem, key) => {
                        return menuLinkItem.isDownloadable ? (
                            <li key={key}>{menuLinkItem.title}</li>
                        ) : (
                            <Link key={key} to={menuLinkItem.path}>
                                <li>{menuLinkItem.title}</li>
                            </Link>
                        );
                    })}
                </ul>
                <div>
                    <MenuIcon
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
