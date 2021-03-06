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


const Project: React.FC = () =>{
    return(
        <div className="App" >
        <div className="ProjectSideBar">
          <div className="SideImage">
          </div>
          <h1 className="Name">Hayden Schultz</h1>
          <h2 className="Description">Full-Stack Web Devloper</h2>
          <Link to={'/'}>
            <p className="sideText">Home</p>
          </Link>
          <Link to={'/About'}>
            <p className="sideText">Skills</p>
          </Link>
          <br></br>
            <h2 className="connect">Let's Connect:</h2>
          <a href="https://www.linkedin.com/in/hayden-schultz/" target="blank">
            <img className="Svg" src={linkdin}  alt=""/>
        </a>
        <a href="https://github.com/kellogsfrost" target="blank">
            <img className="Svg" src={github} alt=""/>
            </a>
            <a href="https://drive.google.com/file/d/1xjT9XOI_r7VLvjETdyI0Uw8S85zV7qTR/view" target="blank">
            <img className="Svg" src={file} alt=""/>
            </a>
        </div>
          <div className="ProjectSectionOne">
          <a href="https://warforthestars.netlify.com/" target="blank">
              <div className="ProjectOne"> 
              </div>
              </a>
              <a href="https://warforthestars.netlify.com/" target="blank">
              <p className="projectName">War for the Stars!</p>
              </a>
              {/* <a href="https://desolate-dusk-17452.herokuapp.com/" target="blank">
              <div className="ProjectTwo"> 
              </div>
              </a>
              <a href="https://desolate-dusk-17452.herokuapp.com/" target="blank">
              <p className="projectName">Jam-Band</p>
              </a>
              <a href="https://morning-cliffs-94208.herokuapp.com/" target="blank">
              <div className="ProjectThree"> 
              </div>
              </a>
              <a href='https://morning-cliffs-94208.herokuapp.com/' target="blank">
              <p className="projectName">JobTraker</p>
              </a>
              <a href="https://browsing-for-housing.netlify.com/" target="blank">
              <div className="ProjectFive"> 
              </div>
              </a>
              <a href="https://browsing-for-housing.netlify.com/" target="blank">
              <p className="projectName">Browsing for Housing</p>
              </a>
              <a href="http://localhost:3000" target="blank">
              <div className="ProjectFour"> 
              </div>
              </a>
              <a href="http://localhost:3000" target="blank">
              <p className="projectName">HairPort</p>
              </a> */}
          </div>
      </div>
    );
}


export default Project;