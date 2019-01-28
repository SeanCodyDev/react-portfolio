import React from 'react';

//import components
import Card from './card';

export default function ProjectsPage(props) {

  //map through projects and render a card component for each
  const projects = props.projects.map((project, index) => {
    return (
      <Card type='project' {...project} key={index} />
      )
  })

  return (
    <div className="ProjectsPage">
      {projects}
    </div>
    );
}


