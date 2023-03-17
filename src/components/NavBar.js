import { motion } from "framer-motion";
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

const NavBar = ({ isMenuOpen, isScreenScrolled, setIsMenuOpen }) => {
    return (
        <header
            id="nav-bar"
            className={
                isScreenScrolled ? "translucentBackground" : "opaqueBackground"
            }
        >
            <div className="wrapper">
                <h1>
                    <Link to="/">
                        {isScreenScrolled
                            ? "Portfolio"
                            : 'System.out.println("Hello")'}
                    </Link>
                </h1>
                {isScreenScrolled && (
                    <motion.ul
                        initial={{ y: "-5rem" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {menuLinkList.map((menuLinkItem, key) => {
                            return menuLinkItem.isDownloadable ? (
                                <li key={key}>{menuLinkItem.title}</li>
                            ) : (
                                <Link key={key} to={menuLinkItem.path}>
                                    <li>{menuLinkItem.title}</li>
                                </Link>
                            );
                        })}
                    </motion.ul>
                )}
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
