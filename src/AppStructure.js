import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Menu, NavBar } from "./components";
import { appContext } from "./context/AppContext";
import useMousePosHook from "./hooks/useMousePosHook";

const AppStructure = ({ children }) => {
    const mousePos = useMousePosHook();
    const { image, isMenuOpen } = useContext(appContext);

    return (
        <>
            <div className="fixed-background"></div>
            <NavBar />
            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
            {children}
            <motion.div
                className={
                    image === ""
                        ? "background-info-image"
                        : "background-info-image reveal"
                }
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
            >
                {image !== "" && <img src={image} alt="background" />}
            </motion.div>
        </>
    );
};

export default AppStructure;
