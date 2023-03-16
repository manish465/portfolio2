import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

const App = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) setIsScreenScrolled(true);
        else setIsScreenScrolled(false);
    });

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <>
            <NavBar
                isScreenScrolled={isScreenScrolled}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
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
