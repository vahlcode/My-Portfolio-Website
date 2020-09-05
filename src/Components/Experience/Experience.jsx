import React from "react";
import "./Experience.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heading: props.heading,
            experience: []
        }
        this.getExperience = this.getExperience.bind(this)
    }

    componentDidMount() {
        this.getExperience()

        ScrollTrigger.config({limitCallbacks: true})
        gsap.from(".experience>.entry>*", {
            x: -100,
            autoAlpha: 0,
            ease: "back", 
            duration: 1,
            stagger: .2,
            scrollTrigger: {
              trigger: ".experience",
              start: 'top 50%',
              once: true
            },
          })

    }

    getExperience() {
        fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            this.setState({experience: data.experience})
            this.getExperience()
        })
        .catch(error => console.log(error))
    }
    
    render(){
        const {heading, experience} = this.state;
        return(
            <section className="experience" id="experience">
                <div className="entry">
                    <h1>
                        {heading}
                    </h1>
                </div>
                
                <div className="experience-cards">
                    {
                        experience.map((experience, index) => (
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
                                <ul>
                                    {experience.duty.map((dut, index) => <li key={index}>{dut}</li>)}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Experience;