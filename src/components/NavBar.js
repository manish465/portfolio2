import MenuIcon from "../assets/MenuIcon";

const NavBar = ({ setIsMenuOpen }) => {
    return (
        <header id="nav-bar">
            <div className="wrapper">
                <h1>Portfolio</h1>
                <MenuIcon setIsMenuOpen={setIsMenuOpen} />
            </div>
        </header>
    );
};

export default NavBar;
