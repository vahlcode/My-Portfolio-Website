import React from "react";
import "./Portfolio.css";
import Card from "./Cards";
import portfolio from "../Portfolio";

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heading: props.heading,
            paragraph: props.paragraph,
            portfolios: portfolio
        }
    }

    render(){
        return(
            <section className="portfolio animated hide" id="portfolio">
                <div className="entry">
                    <h1>
                        {this.state.heading}
                    </h1>
                    <p>
                        {this.state.paragraph}
                    </p>
                </div>
                <div className="portfolio-cards">
                    {
                        this.state.portfolios.map((portfolio, index) => (
                            <Card 
                                key={index} 
                                items={portfolio}
                            />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Portfolio;