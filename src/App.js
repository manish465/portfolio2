import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
    const location = useLocation();
    const containerRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // setIsMenuOpen(true);
        // setTimeout(() => setIsMenuOpen(false), 1000);
    }, [location.pathname]);

    return (
        <>
            <div className="fixed-background"></div>
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
            <LocomotiveScrollProvider
                options={{ smooth: true }}
                containerRef={containerRef}
            >
                <main ref={containerRef} data-scroll-container>
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </main>
            </LocomotiveScrollProvider>
        </>
    );
};

export default App;
