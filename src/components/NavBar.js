import { motion } from "framer-motion";
import MenuIcon from "../assets/icons/MenuIcon";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ isScreenScrolled, setIsMenuOpen, setIsDarkMode }) => {
    return (
        <header
            id="nav-bar"
            className={
                isScreenScrolled ? "translucentBackground" : "opaqueBackground"
            }
        >
            <div className="wrapper">
                {isScreenScrolled ? (
                    <h1>Portfolio</h1>
                ) : (
                    <h1>System.out.println( "Hi" )</h1>
                )}
                {isScreenScrolled && (
                    <motion.ul
                        initial={{ y: "-5rem" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <li>Overview</li>
                        <li>Projects</li>
                        <li>Carrer</li>
                        <li>Resume</li>
                    </motion.ul>
                )}
                <div>
                    <ThemeToggle setIsDarkMode={setIsDarkMode} />
                    <MenuIcon setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
