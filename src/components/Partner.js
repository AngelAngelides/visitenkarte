import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { h2 } from "../theme/typography"
import Dots from "./Dots"
import { brandGrey } from "../theme/colors"
import { useInView } from "react-intersection-observer"

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  max-width: 1176px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 780px) {
    height: 700px;
  }
`
const StyledImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 880px) {
    width: 60%;
  }
`

const StyledImageItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.35s ease-out;
  width: ${({inView}) => inView ? "30%" : "50%"};
  margin: ${({ isMiddle }) => isMiddle && "0 24px"};
  .gatsby-image-wrapper {
    width: 100%;
  }
  :hover {
    opacity: 0.5;
  }
  @media (min-width: 780px) {
    width: ${({inView}) => inView ? "150px" : "200px"};
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
  font-size: 10px;
  letter-spacing: 0;
  line-height: 14px;

  font-weight: 400;
  margin-top: 16px;
  text-align: center;
  color: ${brandGrey};
  @media (min-width: 780px) {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 22px;
  }
`

const Content = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true	 })
  const data = useStaticQuery(graphql`
    query {
      spryLabs: file(
        relativePath: { eq: "aco-website-partner-logo-sprylab-color.png" }
      ) {
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
      botLabs: file(
        relativePath: { eq: "aco-website-partner-logo-botlabs-color.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledContentWrapper ref={ref}>
      <Dots number={5} type="top-center" />
      <StyledTextWrapper>
        <StyledTitle>Partner</StyledTitle>
      </StyledTextWrapper>
      <StyledImgWrapper>
        <StyledImageItemWrapper inView={inView} href="https://galaniprojects.de/">
          <Img fluid={data.spryLabs.childImageSharp.fluid} />
          <StyledSubTitle>sprylab technologies GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper inView={inView} isMiddle href="https://sprylab.com/en/">
          <Img fluid={data.galaniprojects.childImageSharp.fluid} />
          <StyledSubTitle>galaniprojects GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper inView={inView} href="https://botlabs.org/">
          <Img fluid={data.botLabs.childImageSharp.fluid} />
          <StyledSubTitle>BOTLabs GmbH</StyledSubTitle>
        </StyledImageItemWrapper>
      </StyledImgWrapper>
      <Dots number={4} type="bottom-center" />
    </StyledContentWrapper>
  )
}
export default Content
