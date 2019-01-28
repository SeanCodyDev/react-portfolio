import React from 'react';

//import components
import Card from './card';

export default function LandingPage(props) {

    return (
      <div className="landing-page">
        <Card 
        	type="landing"
        	text={props.about.landingText} 
        	imgUrl={props.about.bioImgUrl} 
          email={props.about.email}
        />
      </div>
    );
  }


