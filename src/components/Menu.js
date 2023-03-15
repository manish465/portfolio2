import { motion } from "framer-motion";

const Menu = () => {
    return (
        <motion.nav
            id="menu"
            initial={{ y: "-150%", skewY: 20 }}
            animate={{ y: 0, skewY: 0 }}
            exit={{ y: "-150%", skewY: 10 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1>This is menu section</h1>
        </motion.nav>
    );
};

export default Menu;
