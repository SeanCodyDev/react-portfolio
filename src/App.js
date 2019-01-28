import React, { Component } from 'react';
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
        bioText: "My greatest strengths as a web developer: an endless sense of curiosity, a desire to continuously improve (myself and my work), and a keen sense of the creative process. I have a Bachelor of Science degree in Chemical Engineering from Rose-Hulman Institute of Technology, and have worked technical and project management responsibilities for two Fortune 500 companies. Today, I lead a team of over 200 Health Coaches, cumulitavily assisting thousands of clients create more optimally healthy days for themselves. My passion for technical problem-solving, the creative process, and self-improvement has driven me to pursue web development. I call Carmel, Indiana my home along with my wife and two children.",
        email: "sean.meghan.cody@gmail.com",
        githubUrl: "https://github.com/SeanCodyDev",
        linkedInUrl: "https://www.linkedin.com/in/seandcody/"
      },
      projects: [
        {
          name: "CiTYSCENE",
          imgUrl: "../images/cityscene_demo1.png",
          text: "CiTYSCENE gives you a quick glimpse at what is going on in a major city near you. Curious where to grab coffee? What kind of events are coming up? What's in the news, or even what people are saying on Twitter? CitYSCENE answers all your questions at a glance.",
          repoUrl: "https://github.com/SeanCodyDev/cityscene",
          liveUrl: "https://cityscene-app.herokuapp.com/",
          techImg: [<FaHtml5 size="4em" />, <FaCss3 size="4em" />, <FaJsSquare size="4em" />, <FaNodeJs size="4em" />]
        },
        {
          name: "Habit Track",
          imgUrl: "../images/habit-track_demo1.png",
          text: "With Habit Track, you can assess what health-related habits can be improved and daily track your progress towards improving them. Can you beat your previous best streak for hydrating well throughout your day?",
          repoUrl: "https://github.com/SeanCodyDev/habit-track",
          liveUrl: "https://habit-track-app.herokuapp.com/",
          techImg: [<FaHtml5 size="4em" />, <FaCss3 size="4em" />, <FaJsSquare size="4em" />, <FaNodeJs size="4em" />, <FaDatabase size="4em" />]
        },
        {
          name: "Endeavor",
          imgUrl: "../images/endeavor_demo.png",
          text: "Endeavor is a simple to-do app that allows users to login and manage dated to-do lists. See your week's activities at a glance, or jump forward in time to create a future task.",
          repoUrl: "https://github.com/SeanCodyDev/endeavor-react-capstone",
          liveUrl: "https://endeavor.netlify.com/",
          techImg: [<FaHtml5 size="4em" />, <FaCss3 size="4em" />, <FaJsSquare size="4em" />, <FaNodeJs size="4em" />, <FaDatabase size="4em" />, <FaReact size="4em" />]
        }
      ]
    }
  }


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


