import React from "react"
import logo from "../images/logo.svg"

export default function NavBar() {
    return (
        <nav className="NavBar">
            <img src={logo} className="NavBar-img"></img>
            <h2 className="NavBar-text">rare puppers</h2>
        </nav>
    )
}