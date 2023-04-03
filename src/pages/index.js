import Overview from "./Overview";
import PageNotFound from "./PageNotFound";
import Projects from "./Projects";

export const pageList = [
    { path: "/", element: <Overview /> },
    { path: "/projects", element: <Projects /> },
    { path: "*", element: <PageNotFound /> },
];
