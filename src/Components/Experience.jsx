import React from "react";
import "./Experience.css";

class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heading: props.heading,
            paragraph: props.paragraph,
            experience: props.experience
        }
    }

    render(){
        return(
            <section className="experience animated  hide" id="experience">
                <div className="entry">
                    <h1>
                        {this.state.heading}
                    </h1>
                    <p>
                        {this.state.paragraph}
                    </p>
                </div>
                <div className="experience-cards">
                        {
                            this.state.experience.map((experience, index) => (
                                <div key={index} className="experience-card">
                                    <div className="company-details">
                                        <div className="logo">
                                            <img src={experience.logo} alt=""/>
                                        </div>
                                        <div className="experience-details">
                                            <div className="company-name">
                                                {experience.company}
                                            </div>
                                            <div className="period">
                                                <h3>
                                                {experience.start} - {experience.end}
                                                </h3>
                                            </div>
                                            <div className="role">
                                                <h3>
                                                {experience.role}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </section>
        )
    }
}

export default Experience;