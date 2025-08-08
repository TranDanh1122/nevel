import React from "react";
import clsx from "clsx/lite";

interface ButtonProps extends React.ComponentProps<"button"> {
    label: string | React.ReactElement;
    variant: "primary" | "outline";
}
const Button: React.FC<ButtonProps> = ({ label, className, disabled, variant, ...props }): React.JSX.Element => {
    const defaultClass = "md:px-8 px-5 py-2 md:text-base text-sm leading-6 font-barlow font-semibold italic rounded-3xl cursor-pointer"
    const classes = clsx(
        defaultClass,
        disabled && "opacity-40 cursor-not-allowed",
        variant === "outline" && "bg-transparent border border-primary-500 text-secondary-400 hover:border-primary-200",
        variant === "primary" && "text-secondary-900 bg-primary-500 hover:bg-primary-700",
        className
    )
    return (
        <button
            {...props}
            className={classes} >
            {label}

        </button>
    );
}
export default React.memo(Button);