import React from 'react';
import styled from 'styled-components';


//import components
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import "../index.css";

export default function Card(props) {

	//styling could've been completed with CSS
	//but here styled-components library demonstrated
	//best practice would be to put these in separate files
	//but they are here for simplicity and because they are single use in this component

	const StyledCard = styled.div`
		background-color: #304050
		margin: auto
		border-radius: 10px
		padding: 40px
		max-width: 1000px
		margin-bottom: 40px
		color: #FFF
		font-family: 'Source Sans Pro', sans serif;
	`

	//conditional formatting demonstrated
	const ImgWrapper = styled.img`
		border-radius: ${props => props.profile ? '50%': 'none'}
		max-width: ${props => props.profile ? '360px': 'auto'}
		margin-bottom: 20px
		width: 100%
	`

	const PWrapper = styled.p`
		font-size: 1.1em
		line-height: 1.4em
	`

	const Button = styled.button`
		font-size: 1.2em;
		margin: 1em;
		padding: 20px;
		border-radius: 3px;
		background-color: #54AA97;
		cursor: pointer;
		color: #FFFFFF
		width: 80%
		text-decoration: none

		&:hover {
    		text-decoration: underline;
  		}

  		@media (min-width: 720px) {
    		width: 200px;
  		}
	`

	//map through names, descriptions, and tech images to render
	let infoSection;
	let emailLink = props.email ? `mailto:${props.email}` : null;

	if (props.type === 'landing'){

		infoSection = 
		<div>
			<ImgWrapper type={props.type} src={props.imgUrl} alt="bio" profile="true" />
			<PWrapper>{props.text}</PWrapper>
			<a href={emailLink}><Button>Email Me</Button></a>
	        <a href="/projects"><Button>View Projects</Button></a>
        </div>
        


	} else if (props.type === 'project') {

		let techImages = props.techImg.map((tech, index) => {
			return (
				<li className="tech" key={index}>{tech}</li>
			)
		})

		infoSection = 
		<div>
			<ImgWrapper type={props.type} src={props.imgUrl} alt="bio" />
			<h2 className="project-header">{props.name}</h2>
			<PWrapper>{props.text}</PWrapper>
			<ul className="tech-list icon-list">
				{techImages}
			</ul>
			<a href={props.repoUrl}><Button>View Repo</Button></a>
	        <a href={props.liveUrl}><Button>View Live</Button></a>
		</div>
		


	} else {

		//react-icons style props unique from styled components or CSS
		let iconProps = {
			color: "white",
			size: "4em"
		}

		infoSection = 
		<div>
			<ImgWrapper type={props.type} src={props.imgUrl} alt="bio" profile="true" />
			<PWrapper>{props.text}</PWrapper>
			<h2>Connect with me:</h2>
			<ul className="icon-list">
				<li><a href={props.githubUrl}><FaGithub {...iconProps} /></a></li>
		        <li><a href={props.linkedInUrl}><FaLinkedin {...iconProps}/></a></li>
		        <li><a href={emailLink}><FaEnvelope {...iconProps}/></a></li>
	        </ul>
        </div>
	}

    return (
      <StyledCard>
        {infoSection}
      </StyledCard>
    );
  }


