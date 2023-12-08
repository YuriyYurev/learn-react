import React from "react";
import classess from "./MyInput.module.css"

export default function MyInput(props) {
    return (
        <input className={classess.myInput} {...props}/>
    )
}