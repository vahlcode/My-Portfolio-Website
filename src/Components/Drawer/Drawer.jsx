import React, { Component } from "react";
import "./Drawer.css";

export class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            show: props.draw
        }
    }

    componentWillReceiveProps(props) {
        this.setState({content: props.content, show: !this.state.show})
    }

    render() {
        const {content, show} = this.state;
        return(
            <section className="drawer" style={{display: (show) ? "block" : "none"}}>
                <div className="overlay"></div> {/*For blurred background*/}
                <div className="main-content" style={{transform: (show) ? "translateX(0)" : "translateX(100%)"}}>
                    <div className="header">
                        <button>
                            <span className="icon icon-moonarrow-left2"></span>
                        </button>
                    </div> {/*Contains the close drawer button*/}
                    <div className="image">
                        <img src={content.title && content.image} alt={content.title} />
                    </div> {/*Contains the project image*/}
                    <div className="title">
                        <h3>{content.title && content.title}</h3>
                    </div> {/*Contains project title*/}
                    <div className="tools">
                        <ul>{content.tools && content.tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
                    </div> {/*Contains project tools*/}
                    <div className="description">
                        <p>{content.description && content.description}</p>
                    </div> {/*Contains project description*/}
                    <div className="ctas">
                        {content.cta && 
                            <ul>
                                {content.cta.link && <li><a href={content.cta.link} target="_blank" rel="noopener noreferrer"><span className="icon icon-moonlink"></span> View Project</a></li>}
                                {content.cta.git && <li><a href={content.cta.git} target="_blank" rel="noopener noreferrer"><span className="icon icon-moongithub"></span> View Code</a></li>}
                            </ul>
                        }
                    </div> {/*Contains links to github or live website*/}
                </div>
            </section>
        )
    }
}