import React from 'react';

//import components

//functional component
export default function Card(props) {

  	console.log('Card props:', props);
    return (
      <div className="Card">
        <h1 className="card-title">{props.title}</h1>
        <img src={props.imgUrl} alt="bio" />
        <p>{props.text}</p>
         <a href='mailto:sean.meghan.cody@gmail.com'><button>Email Me</button></a>
         <a href="/projects"><button>View Projects</button></a>
      </div>
    );
  }


