import React from "react";
import "./Button.css"

const Button = (props: {children: React.ReactNode})=> {
    return (
        <button className="button">{props.children}</button>
    )
}

export default Button;
