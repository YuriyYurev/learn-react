import React from "react";
import classess from "./MyButtons.module.css"

export default function MyButton({ children, ...props }) {
    return(
        <button {...props} className={classess.myBtn}>{children}</button>
    )
}