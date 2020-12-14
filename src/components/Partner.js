import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { h2 } from "../theme/typography"
import Dots from "./Dots"
import { brandGrey } from "../theme/colors"

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  max-width: 1176px;
  margin: 0 auto;
  height: 700px;
  position: relative;
`
const StyledImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledImageItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.35s ease-out;
  width: 30%;
  margin: ${({isMiddle}) => isMiddle && "0 24px"};
  .gatsby-image-wrapper {
    width: 100%;
  }
  :hover {
    opacity: 0.5;
  }
  @media (min-width: 780px) {
    width: 300px;
  }
`

const StyledTextWrapper = styled.div`
  margin-bottom: 64px;
`
const StyledTitle = styled.h2`
  ${h2}
`

const StyledSubTitle = styled.p`
  font-family: Spartan;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 30px;
  font-weight: 400;
  margin-top: 16px;
  text-align: center;
  color: ${brandGrey};
`

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      spryLabs: file(relativePath: { eq: "aco-website-partner-logo-sprylab-color.png" }) {
        childImageSharp {
          fluid(maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galaniprojects: file(
        relativePath: {
          eq: "aco-website-partner-logo-galaniprojects-color.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      botLabs: file(relativePath: { eq: "aco-website-partner-logo-botlabs-color.png" }) {
        childImageSharp {
          fluid(maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledContentWrapper>
      <Dots number={4} type="top-center" />
      <StyledTextWrapper>
        <StyledTitle>Partner</StyledTitle>
      </StyledTextWrapper>
      <StyledImgWrapper>
        <StyledImageItemWrapper href="https://galaniprojects.de/">
          <Img fluid={data.spryLabs.childImageSharp.fluid} />
          <StyledSubTitle>sprylab technologies GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper isMiddle href="https://sprylab.com/en/">
          <Img fluid={data.galaniprojects.childImageSharp.fluid} />
          <StyledSubTitle>galaniprojects GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper href="https://botlabs.org/">
          <Img fluid={data.botLabs.childImageSharp.fluid} />
          <StyledSubTitle>BOTLabs GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
      </StyledImgWrapper>
      <Dots number={4} type="bottom-center" />
    </StyledContentWrapper>
  )
}
export default Content
