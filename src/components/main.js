import React, { Component } from 'react';
import {Route} from 'react-router-dom';


//import components
import LandingPage from './landing-page';
import ProjectsPage from './projects-page';
import AboutPage from './about-page';


class Main extends Component {


  render() {
    return (
      <div className="Main">
        <Route 
        	exact path="/" 
        	render={(props) => <LandingPage about={this.props.data.about}/>}
        />
        <Route 
        	exact path="/projects" 
        	render={(props) => <ProjectsPage projects={this.props.data.projects}/>}
        />
        <Route 
        	exact path="/about" 
        	render={(props) => <AboutPage about={this.props.data.about} />}
        />

      </div>
    );
  }
}

export default Main;


