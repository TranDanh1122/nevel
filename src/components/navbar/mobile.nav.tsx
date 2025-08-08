import React from "react";
import { MENU_ITEMS } from "@/commons/content";
import ItemNavbar from "./components/item.component";
import clsx from "clsx/lite";
const MobileNav: React.FC<React.ComponentProps<"ul">> = ({ className , ...props }): React.JSX.Element => {
    const menuItems = React.useMemo(() => {
        return MENU_ITEMS.map((item, index) => (
            <ItemNavbar key={index} linked={item.linked} label={item.label} className="w-full text-center"/>
        ));
    }, [])
    return (
        <ul {...props} className={
            clsx(
                "flex flex-col gap-5 items-center p-5 fixed left-0 w-full h-screen bg-secondary-900 z-10",
                className)
        }>
            {menuItems}
        </ul>
    );
}
export default React.memo(MobileNav);