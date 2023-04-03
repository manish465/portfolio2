import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const appContext = createContext();

const AppContext = ({ children }) => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        setIsMenuOpen(true);
        setTimeout(() => setIsMenuOpen(false), 1000);
    }, [location.pathname]);

    return (
        <appContext.Provider
            value={{ isMenuOpen, setIsMenuOpen, image, setImage }}
        >
            {children}
        </appContext.Provider>
    );
};

export default AppContext;
