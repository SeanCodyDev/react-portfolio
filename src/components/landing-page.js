import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import components
import Card from './card';

//functional component
export default function LandingPage(props) {


  	console.log('LandingPage props:', props);
    return (
      <div className="LandingPage">
        <h1>LandingPage</h1>
        <FontAwesomeIcon icon="coffee" />
        <Card 
        	type="landing"
        	text={props.about.landingText} 
        	imgUrl={props.about.bioImgUrl} 
        />
      </div>
    );
  }


