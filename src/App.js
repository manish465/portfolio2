import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) setIsScreenScrolled(true);
        else setIsScreenScrolled(false);
    });

    return (
        <>
            <NavBar
                isScreenScrolled={isScreenScrolled}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                setIsDarkMode={setIsDarkMode}
            />
            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/career" element={<Career />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default App;
