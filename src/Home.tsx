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
          <p>About Me</p>
        </Link>
        <Link to={'/Project'}>
          <p>Projects</p>
        </Link>
          <img className="Svg" src={linkdin}  alt=""/>
          <img className="Svg" src={github} alt=""/>
          {/* <img className="Svg" src={envelope} alt=""/> */}
          <img className="Svg" src={file} alt=""/>
      </div>
      <div className="Land">
        <div className="InnerLanding">
          <div className="HomeHeading">Hi, I'm Hayden,</div>
          <div className="SubHeading">
            <h2 className="SubHeadDescription">a freelance web developer.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
