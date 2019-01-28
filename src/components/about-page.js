import React from 'react';

//import components
import Card from './card';

export default function AboutPage(props) {

    return (
      <div className="AboutPage">
        <Card 
        	type="about"
        	text={props.about.bioText} 
        	imgUrl={props.about.bioImgUrl}
          githubUrl={props.about.githubUrl} 
          linkedInUrl={props.about.linkedInUrl}
          email={props.about.email}
        />
      </div>
    );
  }


