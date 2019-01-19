import React from 'react';
import styled from 'styled-components';


//import components

//functional component
export default function Card(props) {

	const StyledCard = styled.div`
		background-color: #304050
		margin: 20px
		border-radius: 10px
		padding: 40px
	`

	const ImgWrapper = styled.img`
		border-radius: ${props => props.type === 'landing' ? '50%': 'none'}
		margin-bottom: 20px
		width: 80%
		max-width: 360px
	`

	const PWrapper = styled.p`
		color: #FFFFFF
		font-family: 'Source Sans Pro', sans serif;
		font-size: 1.1em
		line-height: 1.4em
	`

	const Button = styled.button`
		font-size: 1.2em;
		margin: 1em;
		padding: 20px;
		border-radius: 3px;
		font-family: 'Source Sans Pro', sans-serif;
		background-color: #54AA97;
		cursor: pointer;
		color: #FFFFFF
		width: 80%
		text-decoration: none

		&:hover {
    		text-decoration: underline;
  		}

  		@media (min-width: 700px) {
    		width: 200px;
  		}
	`

	//map through links to render buttons
	let buttons;

	if (props.type === 'landing'){
		buttons = 
		<div>
			<a href='mailto:sean.meghan.cody@gmail.com'><Button>Email Me</Button></a>
	        <a href="/projects"><Button>View Projects</Button></a>
        </div>
        
	} else {
		buttons = 
		<div>
			<a href={props.repoUrl}><Button>View Repo</Button></a>
	        <a href={props.liveUrl}><Button>View Live</Button></a>
        </div>
	}

	//map through names, descriptions, and tech images to render
	let techImages;

	if (props.type === 'landing'){
		techImages = ''
        
	} else {
		buttons = 
		<div>
			<a href={props.repoUrl}><Button>View Repo</Button></a>
	        <a href={props.liveUrl}><Button>View Live</Button></a>
        </div>
	}

  	console.log('Card props:', props);
    return (
      <StyledCard>
        <ImgWrapper type={props.type} src={props.imgUrl} alt="bio" />
        <PWrapper>{props.text}</PWrapper>
        {buttons}
        {techImages}
      </StyledCard>
    );
  }


