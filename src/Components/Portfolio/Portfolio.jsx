import React from "react";
import "./Portfolio.css";
import Card from "../Card/Cards";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heading: props.heading,
            paragraph: props.paragraph,
            portfolios: [],
            draw: props.draw
        }
    }

    componentDidMount() {
        this.getWorks();
        ScrollTrigger.config({limitCallbacks: true})
        gsap.from(".portfolio>.entry>*", {
            x: -100,
            autoAlpha: 0,
            ease: "back", 
            duration: 1,
            stagger: .2,
            scrollTrigger: {
              trigger: ".portfolio",
              start: 'top 50%',
              once: true
            },
          })
    }

    getWorks() {
        fetch("./data.json")
        .then(response => response.json())
        .then(data => this.setState({portfolios: data.portfolio}))
        .catch(error => console.log(error))
    }

    render(){
        const {heading, paragraph, portfolios} = this.state;
        return(
            <section className="portfolio" id="portfolio">
                <div className="entry">
                    <h1>
                        {heading}
                    </h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
                <div className="portfolio-cards">
                    {
                        portfolios.map((portfolio, index) => (
                            <Card 
                                key={index} 
                                items={portfolio}
                                onClick={() => this.state.draw(index)}
                            />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Portfolio;