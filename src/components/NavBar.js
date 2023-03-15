import MenuIcon from "../assets/MenuIcon";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ setIsMenuOpen, setIsDarkMode }) => {
    return (
        <header id="nav-bar">
            <div className="wrapper">
                <h1>Portfolio</h1>
                <div>
                    <ThemeToggle setIsDarkMode={setIsDarkMode} />
                    <MenuIcon setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
