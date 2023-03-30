import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, Routes } from "react-router-dom";
import AppStructure from "./AppStructure";

import { pageList } from "./pages";

const App = () => {
    return (
        <AppStructure>
            <main>
                <Routes>
                    {pageList.map((page, key) => (
                        <Route
                            key={key}
                            path={page.path}
                            element={page.element}
                        />
                    ))}
                </Routes>
            </main>
        </AppStructure>
    );
};

export default App;
