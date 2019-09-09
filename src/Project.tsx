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
        <div className="SideBar">
          <div className="SideImage">
          </div>
          <h1 className="Name">Hayden Schultz</h1>
          <h2 className="Description">Full-Stack Web Devloper</h2>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <Link to={'/About'}>
            <p>About Me</p>
          </Link>
            <img className="Svg" src={linkdin}  alt=""/>
            <img className="Svg" src={github} alt=""/>
            {/* <img className="Svg" src={envelope} alt=""/> */}
            <img className="Svg" src={file} alt=""/>
        </div>
        <div className="ProjectLand">
          <div className="ProjectSectionOne">
              <div className="ProjectOne">
              </div>
              <div className="ProjectTwo">
              </div>
          </div>
          <div className="ProjectSectionTwo">
              <div className="ProjectThree">
              </div>
              <div className="ProjectFour">
              </div>
        </div>
        </div>
      </div>
    );
}


export default Project;