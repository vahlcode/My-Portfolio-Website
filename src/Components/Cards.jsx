import React from "react";
import "./Card.css"

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items
        }
    }

    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <img src={this.state.items.image} alt=""/>
                </div>
                <div className="card-description">
                    <h4 className="card-title">
                        {this.state.items.title}
                    </h4>
                    <ul className="card-tools">
                        {
                            this.state.items.tools.map((tool, index) => (
                                <li key={index}>
                                    <span>{tool}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card;