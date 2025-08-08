import React from "react";

export const ResponsiveContext = React.createContext<{
    isMobile: boolean
}>({ isMobile: false });