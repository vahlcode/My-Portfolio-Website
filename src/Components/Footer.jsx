import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="contact">
                    <a href="mailto:valentineelum@gmail.com"><span className="icon icon-moonmail4"></span> Contact Me</a>
                    <ul className="socials">
                        <li>
                            <a href="https://twitter.com/Vahlcode">
                                <span className="icon icon-moontwitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vahlcode">
                                <span className="icon icon-moongithub"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/vahlcode">
                                <span className="icon icon-moonfeed"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Designed and Written with <span className="icon icon-moonheart"></span> in Onitsha by Valentine Elum</p>
            </footer>
        )
    }
}

export default Footer;