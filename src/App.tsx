import React from 'react';
import me from './me.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" >
      <div className="SideBar">
        <div className="SideImage">
        </div>
      </div>
      <div className="Land">
      </div>
      <div className="AboutMe">
        This is the About Me
      </div>
      <div className="Projects">
        This is the Project Page
      </div>
    </div>
  );
}

export default App;
