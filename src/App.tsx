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
        <p className="Info">Hayden Schultz</p>
          <img className="Svg" src={linkdin} alt=""/>
          <img className="Svg" src={file} alt=""/>
          <img className="Svg" src={github} alt=""/>
          <img className="Svg" src={envelope} alt=""/>
      </div>
      <div className="Land">
      </div>
      <div className="AboutMe">
        This is the About Me
      </div>
      <div className="Projects">
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
       <img src="https://www.placecage.com/400/600" className="ProjectImg"/>
      </div>
    </div>
  );
}

export default App;
