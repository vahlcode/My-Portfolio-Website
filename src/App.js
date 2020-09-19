import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import {Drawer} from "./Components/Drawer/Drawer";
import Preloader from "./Components/Preloader/Preloader"
import Volunteer from "./Components/Volunteer/Volunteer"
import "./Assets/Icons/icon.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loaded: false,
      drawContent: [],
      draw: false
    }
    this.updateTheme = this.updateTheme.bind(this)
    this.Draw = this.Draw.bind(this)
  }

  componentDidMount() {
    //Updating themes once component mounts
    this.updateTheme()

    const body = document.querySelector('body')
    const root = document.querySelector('#root')
    const drawer = document.querySelector('.drawer')

    // Disabling scroll until elements are fully loaded
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        this.setState({...this.state, loaded: false}, () => {
          body.style.overflow = "hidden"
          root.style.overflow = "hidden"
        })
      } else{
        this.setState({...this.state, loaded: true}, () => {
          body.style.overflow = "auto"
          root.style.overflow = "auto"
          drawer.style.display = "none"
        })
      }
    }

    const CLOSE_DRAWER = document.querySelector(".drawer>.main-content>.header>button")

    CLOSE_DRAWER.addEventListener("click", () => {
      this.setState({
        draw: !this.state.draw,
        drawContent: []
      }, () => {
        body.style.overflow = "auto"
        root.style.overflow = "auto"
      })
      
    })
  }

  Draw (i) {
    const body = document.querySelector('body')
    const root = document.querySelector('#root')

    this.setState({...this.state, loaded: false}, () => {
      body.style.overflow = "hidden"
      root.style.overflow = "hidden"
    })

    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        this.setState({...this.state, loaded: true});
        this.setState({drawContent: data.portfolio[i], draw: !this.state.draw})
    })
    .catch(error => console.log(error))
  }

  updateTheme() {
    const currentTheme = localStorage.getItem('theme');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }
  }

  render() {
    const {loaded, drawContent, draw} = this.state
    return (
      <div className="App">
        <Header />
        <Hero loaded={loaded} />
        <Portfolio 
          heading="My Works"
          paragraph="These are some of the jobs I've done in the past."
          draw={this.Draw}
        />
        <Skills/>
        <Experience 
          heading="My Experience" 
        />
        <Volunteer 
          heading={"Organizations \nI've Volunteered for"}
        />
        <Footer />
        <Drawer content={drawContent} draw={draw}/>
        <Preloader loaded={loaded}/>
      </div>
    )
  }
}

export default App;
