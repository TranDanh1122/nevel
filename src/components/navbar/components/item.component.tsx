import React from "react";
import { ItemNavbarProps } from "../ults/type";
import clsx from "clsx/lite";

const ItemNavbar: React.FC<ItemNavbarProps> = ({ linked, label, active, className, ...props }): React.JSX.Element => {

    return (
        <li
            {...props}
            className={
                clsx(
                    "py-2 px-4.5 nav__item",
                    active && "nav__item--active",
                    className
                )
            }>
            <a className="" href={linked}>{label}</a>
        </li>
    )
}
export default ItemNavbar;