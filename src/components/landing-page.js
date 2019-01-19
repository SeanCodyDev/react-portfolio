import React from 'react';

//import components
import Card from './card';

//functional component
export default function LandingPage(props) {


  	console.log('LandingPage props:', props);
    return (
      <div className="LandingPage">
        <h1>LandingPage</h1>
        <Card 
        	type="landing"
        	text={props.about.landingText} 
        	imgUrl={props.about.bioImgUrl} 
        	title="Welcome"/>
      </div>
    );
  }


