const MenuIcon = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <section
            className={isMenuOpen ? "menu-icon open" : "menu-icon"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
        >
            <span></span>
            <span></span>
            <span></span>
        </section>
    );
};

export default MenuIcon;
