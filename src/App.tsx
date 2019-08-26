import React from 'react';
import cat from './cat.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" >
      <img className="App-logo" src={cat}/>
      <div className="SideBar">
        <p>This is the SideBar</p>
      </div>
      <div className="Land">
      <p>This is the Landing</p>
      </div>
      <div className="AboutMe">
      <p>This is the About Me</p>
      </div>
      <div className="Projects">
      <p>This is the Project Page</p>
      </div>

    </div>
  );
}

export default App;
