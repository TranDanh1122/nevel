import React from "react";

export interface ItemNavbarProps extends React.ComponentProps<"li"> {
    linked : string,
    label : string,
    active?: boolean
}