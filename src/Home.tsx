import React from 'react';
import linkdin from './linkdin.svg';
import envelope from './envelope.svg';
import file from './file.svg';
import github from './github.svg';
import './App.css';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home: React.FC = () => {
  return (
    
    <div className="App" >
      <div className="SideBar">
        <div className="SideImage">
        </div>
        <h1 className="Name">Hayden Schultz</h1>
        <h2 className="Description">Full-Stack Web Devloper</h2>
        <Link to={'/About'}>
          <p className="sideText">Skills</p>
        </Link>
        <Link to={'/Project'}>
          <p className="sideText">Projects</p>
        </Link>
        <br></br>
        <h2 className="connect">Let's Connect:</h2>
        <a href="https://www.linkedin.com/in/hayden-schultz/" target="blank">
            <img className="Svg" src={linkdin}  alt=""/>
        </a>
        <a href="https://github.com/kellogsfrost" target="blank">
            <img className="Svg" src={github} alt=""/>
            </a>
            <a href="https://drive.google.com/file/d/1AIA8PLifT94IJHOEq4_bd8ypr9o591fc/view?usp=sharing" target="blank">
            <img className="Svg" src={file} alt=""/>
            </a>
      </div>
      <div className="Land">
        <div className="InnerLanding">
          <div className="HomeHeading">Hi, I'm Hayden,</div>
          <div className="SubHeading">
            <h2 className="SubHeadDescription">A passionate web developer who will quickly and cost-effectively solve problems and, consistently deliver a quality product.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
