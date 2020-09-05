import React from "react";
import "./ThemeSwitch.css"

class ThemeSwitcher extends React.Component {
    constructor() {
        super();
        this.switchTheme = this.switchTheme.bind(this);
    }  

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }   
    }

    render() {
        return(
            <div className="theme-switcher">
                <em><span className="icon icon-mooncontrast"></span></em>
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onChange={this.switchTheme}/>
                    <div className="slider round"></div>
                </label>
                <em><span className="icon icon-moonsun"></span></em>
            </div>
        )
    }
}

export default ThemeSwitcher;