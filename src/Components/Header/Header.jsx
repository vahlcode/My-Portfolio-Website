import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Header.css"

class Header extends React.Component{
    render() {
        return(
            <header>
                <ThemeSwitch />
            </header>
        )
    }
}

export default Header;