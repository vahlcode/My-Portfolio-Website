import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Tools from "./Components/Tools";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import "./Assets/Icons/icon.css";
import works from "./Experience";
import volunteers from "./Volunteers";
import skills from "./Skills";
import tools from "./Tools";
import isInViewPort from "./Assets/Js/isInViewPort";
import "./Assets/css/animate.css";

class App extends React.Component {
  constructor(props){
    super(props)
    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    this.updateTheme();

    window.addEventListener('scroll', (e) => {
      const element = document.querySelectorAll('section');
      for (let i = 0; i < element.length; i++) {
        const div = element[i];
        if (isInViewPort(div)) {
          div.classList.add('fadeInUp');
          div.classList.replace('hide', 'show');
          div.addEventListener('animationend', () => {
            div.classList.remove('fadeInUp');
          })
        }
        
      }
    })

    const body = document.querySelector('body');
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        this.setState({...this.state, loaded: false});
        body.style.overflow = "hidden";
      } else{
        this.setState({...this.state, loaded: true});
        body.style.overflow = "auto";
      }
    }
  }

  updateTheme() {
    const currentTheme = localStorage.getItem('theme');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Experience 
          heading="My Experience" 
          paragraph="I have 5 years of experience designing and developing web applications and 2+ years in designing brand identities." 
          experience={works}
        />
        <Experience 
          heading="Volunteers" 
          paragraph="I have volunteered to help non-governmental organizations in Africa distribute help to give help to those who need help and promote education and technology." 
          experience={volunteers}
        />
        <Skills skills={skills}/>
        <Tools tools={tools}/>
        <Portfolio 
          heading="Job I've Done"
          paragraph="These are some of the jobs I've done in the past."
        />
        <Footer />
      </div>
    )
  }
}

export default App;
