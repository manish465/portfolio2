import MenuIcon from "../assets/MenuIcon";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ setIsMenuOpen }) => {
    return (
        <header id="nav-bar">
            <div className="wrapper">
                <h1>Portfolio</h1>
                <div>
                    <ThemeToggle />
                    <MenuIcon setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
