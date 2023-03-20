import { Link } from "react-router-dom";
import MenuIcon from "../assets/icons/MenuIcon";

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header id="nav-bar">
            <div className="wrapper">
                <h1>
                    <Link to="/">System.out.println("Hello")</Link>
                </h1>
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
