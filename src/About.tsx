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
            <p className="sideText">Home</p>
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
        <div className="AboutLand">
          <div className="InnerLanding">
              <h2 className="AboutTitles">Skills</h2>
              <div className="Skills">
                JavaScript
                <br></br>
                React
                <br></br>
                Node.js
                <br></br>
                Gatsby.js
                <br></br>
                Express
                <br></br>
                Python
                <br></br>
                JQuery
              </div>
              <div className="Skills">
                CSS
                <br></br>
                HTML
                <br></br>
                Redux
                <br></br>
                EJS
                <br></br>
                ES6
                <br></br>
                JSX
                <br></br>
                Git
                </div>
              <div className="Skills">
                AJAX
                <br></br>
                Axios
                <br></br>
                Fetch
                <br></br>
                Phaser.io
                <br></br>
                Bootstrap
                <br></br>
                Materialize
                <br></br>
                Heroku
                </div>
              <div className="Skills">
                SQL
                <br></br>
                PostgreSQL
                <br></br>
                Sequelize
                <br></br>
                MongoDB
                <br></br>
                Mongoose
                <br></br>
                Django
                <br></br>
                Flask
              </div>
          <div className="MethodContain">
              <h2 className="AboutTitles">Methodologies</h2>
              <div className="Methods">Object Oriented Programming | MVC Pattern | Test-Driven Development | Responsive Design </div>
              <div className="Methods">Authentication (OAuth/Sesssions/Tokens) | CRUD Operations | RESTful Routing</div>
          </div>
          </div>
        </div>
      </div>
    );
}


export default About;