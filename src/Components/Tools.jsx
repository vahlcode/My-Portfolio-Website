import React from "react";
import "./Tools.css";

class Tools extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tools: props.tools
        }
    }

    render() {
        return(
            <section className="tools animated hide">
                <div className="entry">
                    <h1>
                        My Tools
                    </h1>
                    <p>
                        I'm confident and experienced in may design and web development tools.
                    </p>
                </div>
                <div className="tools-cards">
                    {
                        this.state.tools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <span className={`icon ${tool.icon}`}></span> {tool.tool}
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Tools;