import React from "react";
import "./Card.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
            onClick: props.onClick
        }
    }

    componentDidMount() {
        gsap.defaults({ease: "back"});
        gsap.set(".card", {y: 100});

        ScrollTrigger.batch(".card", {
            
        onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: .2, grid: [1, 3]}, overwrite: true}),
        onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
        onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .2, overwrite: true}),
        onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
        
        });
        
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card", {y: 0}));
    }

    render() {
        const {items, onClick} = this.state;
        return(
            <div className="card" onClick={onClick}>
                <div className="card-image">
                    <img src={items.image} alt=""/>
                </div>
                <div className="card-description">
                    <h4 className="card-title">
                        {items.title}
                    </h4>
                    <ul className="card-tools">
                        {
                            items.tools.map((tool, index) => (
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