import { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/AppContext";
import MenuIcon from "../custom-icons/MenuIcon";

const NavBar = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(appContext);

    return (
        <header id="nav-bar" className="glass">
            <Link to="/">
                <h1>Hello</h1>
            </Link>
            <div className="menu-icon-wrapper">
                <MenuIcon
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
            </div>
        </header>
    );
};

export default NavBar;
