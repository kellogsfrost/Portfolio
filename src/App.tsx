import React from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Project from './Project'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <>
              <Router>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/About' render={() => <About />} />
                <Route exact path='/Project' render={() => <Project />} />
              </Router>
      
      
        </>
      
          );
        }
  
  export default App;
  