import React from 'react';

//import components
import Card from './card';

//functional component
export default function ProjectsPage(props) {

    const projects = props.projects.map((project, index) => {
      return (
        <Card type='project' {...project} key={index} />
      )
    })

    return (
      <div className="ProjectsPage">
        <h1>ProjectsPage</h1>
        {projects}
      </div>
    );
  }


