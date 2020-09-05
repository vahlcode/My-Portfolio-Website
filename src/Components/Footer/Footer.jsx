import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="contact">
                    <a href="mailto:valentineelum@gmail.com"><span className="icon icon-moonmail4"></span> Hire Me</a>
                    <ul className="socials">
                        <li>
                            <a href="https://drive.google.com/file/d/1dAtzuqFjpkXQ9lsSs_Y2JMWmY6PszuNq" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moonfile-pdf"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Vahlcode" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moontwitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vahlcode" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moongithub"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/vahlcode" target="_blank" rel="noopener noreferrer">
                                <span className="icon icon-moonfeed"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Designed and Written with <span className="icon icon-moonheart"></span> in Onitsha by 
                    <a href="https://twitter.com/Vahlcode" target="_blank" rel="noopener noreferrer"> Valentine Elum</a>
                </p>
            </footer>
        )
    }
}

export default Footer;