import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p >"I'm a seasoned software developer with <span>two years of experience</span>, specializing in innovative project creation. Adaptable and collaborative, I enjoy working with new technologies and diverse teams. My journey began five years ago, and my commitment to continuous learning drives my professional growth."<br /> 
      <br/>
      "As a <span>full-stack software developer</span>, I've enhanced productivity and performance by <span>35% to 50%</span> in my previous role. Proficient in both front-end and back-end development, I bring a holistic skill set to project execution. With a track record of driving efficiency, I am dedicated to achieving impactful results in every aspect of software development."</motion.p> <br />
      <p className='bold'>Recent technologies I've used:</p>
        <Technologies>
          <Social>
            <Circle/>
            <li>React</li>
          </Social>
          <Social>
            <Circle/>
            <li>Javascript</li>
          </Social>
          <Social>
            <Circle/>
            <li>C#</li>
          </Social>
          <Social>
            <Circle/>
            <li>Rust</li>
          </Social>
        </Technologies>
    </StyledAboutMe>  
)}

const StyledAboutMe = styled(Description)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex: 3;
margin-right: 2rem;
p span, .bold{
  font-family: var(--font-sans);
  color: var(--color-header);
}
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`


export default AboutMe;