import React from "react"
import styled from "styled-components"
import Logo from "../assets/Logo_AppConceptionOne_Sign_Name.inline.svg"
import { copy, h2 } from "../theme/typography"
import Dots from "./Dots"

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (min-width: 1120px) {
    flex-direction: row;
    max-width: 1176px;
    margin: 0 auto;
    height: 700px;
    position: relative;
  }
`

const StyledTextWrapper = styled.div`
  max-width: 576px;
`
const StyledTitle = styled.h2`
  ${h2}
  margin-bottom: 8px;
`
const StyledCopy = styled.div`
  ${copy}
  margin-bottom: 8px;
  p {
    margin-bottom: 8px;
  }
`
const StyledLogo = styled.div`
  svg {
    width: 100%;
  }
  margin-top: 50px;
  @media (min-width: 1120px) {
    svg {
      height: 352px;
      width: 577px;
    }
  }
`

const Content = () => (
  <StyledContentWrapper>
    <Dots number={7} type="top-left" />
    <StyledTextWrapper>
      <StyledTitle>Impressum</StyledTitle>
      <StyledCopy>
        <p>
          Inhaltlich verantwortlich:
          <br />
          AppConceptionOne GmbH
          <br />
        </p>
        <p>
          Marc Moughrabi
          <br />
          Rosenstraße 2
          <br />
          10178 Berlin 
          <br />
        </p>
        Handelsregister Nummer: HRB 220089 B
      </StyledCopy>
      <StyledTitle>Kontakt</StyledTitle>
      <StyledCopy>info@appconception.one</StyledCopy>
    </StyledTextWrapper>
    <StyledLogo>
      <Logo />
    </StyledLogo>
    <Dots number={6} type="bottom-left" />
  </StyledContentWrapper>
)

export default Content
