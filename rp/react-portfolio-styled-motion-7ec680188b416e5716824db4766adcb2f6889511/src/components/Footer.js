import React from 'react'
import { Div, Container } from "../styles/styles"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Div>
      <StyledFooter>
        <p>Let's work together.</p>
        <a href="https://github.com/mariangle/react-portfolio-styled-motion" target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
      </StyledFooter>
    </Div>
  )
}

const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
  p {
    font-size: 0.7rem;
  }
`
export default Footer