import "./styles/main.scss";

import { Route, Routes } from "react-router-dom";
import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import { useState } from "react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            <NavBar
                setIsMenuOpen={setIsMenuOpen}
                setIsDarkMode={setIsDarkMode}
            />
            {isMenuOpen && <Menu />}
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
