const ThemeToggle = ({ setIsDarkMode }) => {
    return (
        <div class="toggle-btn" id="toggle-btn">
            <input
                type="checkbox"
                onClick={() => setIsDarkMode((prev) => !prev)}
            />
            <span></span>
        </div>
    );
};

export default ThemeToggle;
