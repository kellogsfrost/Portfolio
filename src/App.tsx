import React from 'react';
import linkdin from './linkdin.svg';
import envelope from './envelope.svg';
import file from './file.svg'
import github from './github.svg'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" >
      <div className="SideBar">
        <div className="SideImage">
        </div>
        <h1 className="Name">Hayden Schultz</h1>
        <h2 className="Description">Full-Stack Web Devloper</h2>
        <p>About Me</p>
        <p>Projects</p>
          <img className="Svg" src={linkdin} alt=""/>
          <img className="Svg" src={github} alt=""/>
          <img className="Svg" src={envelope} alt=""/>
          <img className="Svg" src={file} alt=""/>
      </div>
      <div className="Land">
        <div className="InnerLanding">
          <div className="HomeHeading">Hi, I'm Hayden,</div>
          <div className="SubHeading">
            <h2>a freelance web developer specialized in
              <br></br>
            <strong>front-end and back-endweb development.</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="AboutMe">
        This is the About Me
      </div>
      <div className="Projects">
       {/* <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/> */}
      </div>
    </div>
  );
}

export default App;
