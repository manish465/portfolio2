const MenuIcon = ({ setIsMenuOpen }) => {
    return (
        <label className="menu-icon" htmlFor="check">
            <input
                type="checkbox"
                id="check"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
};

export default MenuIcon;
