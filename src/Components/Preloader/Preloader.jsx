import React, {Component} from "react";

import "./Preloader.css";

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: props.loaded
        }
    }

    componentWillReceiveProps(props) {
        this.setState({...this.state, loaded: props.loaded})
    }

    render() {
        const {loaded} = this.state;
        return(
            <section className="preloader" style={{display: (loaded) ? "none" : "flex"}}>
                <div className="inner">
                    <div className="loader"></div>
                </div>
            </section>
        )
    }
}

export default Preloader;