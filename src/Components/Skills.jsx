import React from "react";
import "./Skills.css";

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skills: props.skills
        }
    }

    render() {
        return(
            <section className="skills animated hide">
                <div className="entry">
                    <h1>
                        My Skills
                    </h1>
                    <p>
                        I'm skilled and proficient in many skills necessary for developing web applications and identities that stand out.
                    </p>
                </div>
                <div className="skills-cards">
                    {
                        this.state.skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <span className={`icon ${skill.icon}`}></span> {skill.skill}
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Skills;