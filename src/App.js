import { Route, Routes } from "react-router-dom";
import Career from "./pages/Career";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
