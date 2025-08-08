import React from "react";
import debounce from "just-debounce-it";
import { ResponsiveContext } from "./responsive.context";


const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.JSX.Element => {
    const [isMobile, setIsMobile] = React.useState<boolean>(() => window.innerWidth < 768);
    React.useEffect(() => {
        const handleResize = debounce(() => {
            const isMobile = window.innerWidth < 768;
            setIsMobile((prev) => prev != isMobile ? isMobile : prev);
        }, 50);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return <ResponsiveContext.Provider value={{ isMobile }}>
        {children}
    </ResponsiveContext.Provider>
}

export default ResponsiveProvider;