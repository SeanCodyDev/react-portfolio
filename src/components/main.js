import React, { Component } from 'react';
import {Route} from 'react-router-dom';


//import components
import LandingPage from './landing-page';


class Main extends Component {


  render() {
    return (
      <div className="Main">
        <Route 
        	exact path="/" 
        	render={(props) => <LandingPage about={this.props.data.about}/>}
        />

      </div>
    );
  }
}

export default Main;


