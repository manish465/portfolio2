import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

import useMousePosHook from "./hooks/useMousePosHook";

const App = () => {
    const location = useLocation();
    const mousePos = useMousePosHook();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        setIsMenuOpen(true);
        setTimeout(() => setIsMenuOpen(false), 1000);
    }, [location.pathname]);

    return (
        <>
            <div className="fixed-background"></div>
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Overview setImage={setImage} />}
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
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

export default App;
