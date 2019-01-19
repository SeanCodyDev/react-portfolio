import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//import components
import Main from './components/main';
import Navbar from './components/navbar';
import { FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa';


class App extends Component {

  //simple state for project and bio info
  constructor(props){
    super(props);
    this.state = {
      about: {
        landingText: "Hi, I'm Sean Cody... I'm a freelance FULL STACK WEB DEVELOPER offering you a full-stack solution. I'm a web developer and recent graduate of the Thinkful Full-Stack Web Development Bootcamp. I love to develop clean, mobile-friendly, web apps using Javascript, Node.js, and React. I want anyone who visits any of my projects to have a simple and intuitive experience, and find a dose of inspiration to carry with them throughout their day.",
        bioImgUrl: "../images/sean_hero.jpg",
        bioText: "A bit about me...",
        email: "",
        githubUrl: "",
        linkedInUrl: ""
      },
      projects: [
        {
          name: "CiTYSCENE",
          imgUrl: "../images/cityscene_demo1.png",
          text: "A bit about CiTYSCENE",
          repoUrl: "https://github.com/SeanCodyDev/cityscene",
          liveUrl: "https://cityscene-app.herokuapp.com/",
          techImg: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />, <FaNodeJs />]
        },
        {
          name: "Habit Track",
          imgUrl: "../images/habit-track_demo1.png",
          text: "a bit about habit track",
          repoUrl: "https://github.com/SeanCodyDev/habit-track",
          liveUrl: "https://habit-track-app.herokuapp.com/",
          techImg: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />, <FaNodeJs />, <FaDatabase />]
        },
        {
          name: "Endeavor",
          imgUrl: "../images/endeavor_demo.png",
          text: "a bit about endeavor",
          repoUrl: "https://github.com/SeanCodyDev/endeavor-react-capstone",
          liveUrl: "https://endeavor.netlify.com/",
          techImg: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />, <FaNodeJs />, <FaDatabase />, <FaReact />]
        }
      ]
    }
  }

        //   <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <p>
        //     Edit <code>src/App.js</code> and save to reload.
        //   </p>
        //   <a
        //     className="App-link"
        //     href="https://reactjs.org"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Learn React
        //   </a>
        //   <h1>Test: {this.state.projects[0].name}</h1>
        // </header>

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main data={this.state}/>
      </div>
    );
  }
}

export default App;


