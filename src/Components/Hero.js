import React,{Component} from "react";
import "./Hero.css"
import Photo from "../Assets/Images/pp.jpg";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <section className="hero animated fadeIn">
                <div className="row">
                    <div className="about">
                        <h1 className="intro">
                        Hey! I'm Valentine Elum
                        </h1>
                        <p className="bio">
                        I'm a web developer and brand identity designer with good 
                        experience in building sleek and scalable user interface, 
                        designing unique brand identities and 
                        building optimal backend systems.
                        </p>
                        <div className="hero-cta">
                            <ul className="socials">
                                <li>
                                    <a href="https://twitter.com/Vahlcode"><span className="icon icon-moontwitter"></span></a>
                                </li>
                                <li>
                                    <a href="https://github.com/vahlcode"><span className="icon icon-moongithub"></span></a>
                                </li>
                                <li>
                                    <a href="https://dev.to/vahlcode"><span className="icon icon-moonfeed"></span></a>
                                </li>
                            </ul>
                            <a href="#experience">Read About Me <span className="icon icon-moonarrow-down2"></span></a>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Photo} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;