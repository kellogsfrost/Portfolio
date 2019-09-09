import React from 'react';
import linkdin from './linkdin.svg';
import file from './file.svg';
import github from './github.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const About: React.FC = () =>{
    return(
        <div className="App" >
        <div className="SideBar">
          <div className="SideImage">
          </div>
          <h1 className="Name">Hayden Schultz</h1>
          <h2 className="Description">Full-Stack Web Devloper</h2>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <Link to={'/Project'}>
            <p>Projects</p>
         </Link>
            <img className="Svg" src={linkdin}  alt=""/>
            <img className="Svg" src={github} alt=""/>
            <img className="Svg" src={file} alt=""/>
        </div>
        <div className="AboutLand">
          <div className="InnerLanding">
          </div>
        </div>
      </div>
    );
}


export default About;