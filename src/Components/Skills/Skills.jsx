import React from "react";
import "./Skills.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentDidMount() {
        this.getSkills();
        ScrollTrigger.config({limitCallbacks: true})
        gsap.from(".skills>.entry>*", {
            x: -100,
            autoAlpha: 0,
            ease: "back", 
            duration: 1,
            stagger: .2,
            scrollTrigger: {
              trigger: ".skills",
              start: 'top 50%',
              once: true
            },
          })
    }

    getSkills() {
        fetch("data.json")
        .then(response => response.json())
        .then(data => this.setState({skills: data.skills}))
        .catch(error => console.log(error))
    }

    render() {
        const {skills} = this.state;
        return(
            <section className="skills">
                <div className="entry">
                    <h1>
                        Skills and Tools
                    </h1>
                    <p>
                    Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for
          users with various business objectives. Judicious and creative when crafting effective websites, apps and
          platforms to propel competitive advantage and revenue growth. Technically proficient and analytical
          problem solver with calm and focused demeanor.
                    </p>
                </div>
                <div className="skills-cards">
                    {
                        <React.Fragment>
                            <div className="skill-card">
                                <ul>
                                    {
                                        skills.soft && skills.soft.map((soft, index) => <li key={index}>{soft}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="skill-card">
                                <ul>
                                    {
                                        skills.languages && skills.languages.map((language, index) => <li key={index}>{language}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="skill-card">
                                <ul>
                                    {
                                        skills.tools && skills.tools.map((tool, index) => <li key={index}>{tool}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="skill-card">
                                <ul>
                                    {
                                        skills.backend && skills.backend.map((backend, index) => <li key={index}>{backend}</li>)
                                    }
                                </ul>
                            </div>
                        </React.Fragment>
                    }
                    
                </div>
            </section>
        )
    }
}

export default Skills;