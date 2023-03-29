import { Link } from "react-router-dom";
import MenuIcon from "../custom-icons/MenuIcon";

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
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
