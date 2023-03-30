import { StrictMode } from "react";
import "./styles/main.scss";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppContext from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <AppContext>
                <App />
            </AppContext>
        </BrowserRouter>
    </StrictMode>
);
