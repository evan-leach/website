import { useState } from "react";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import About from "./pages/About";
import Academics from "./pages/Academics";
import Projects from "./pages/Projects";

export default function App() {
    const [page, setPage] = useState("about");

    const pages = {
        about: <About />,
        academics: <Academics />,
        projects: <Projects />,
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <Navbar current={page} setPage={setPage} />
            <PageWrapper>{pages[page]}</PageWrapper>
        </div>
    );
}