import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { h2 } from "../theme/typography"
import Dots from "./Dots"
import { brandGreen, brandLight } from "../theme/colors"
import { useInView } from "react-intersection-observer"
import { useInnerwidth } from "../hooks/useInnerwidth"

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 1176px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 780px) {
    height: 700px;
  }
`

const StyledTextWrapper = styled.div`
  max-width: 576px;
`

const StyledImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: transform 2.5s ease-out;
  transform: ${({ inView, innerWidth }) =>
    inView ? "translateX(0)" : `translateX(-${innerWidth}px)`};
  @media (min-width: 780px) {
    flex-wrap: nowrap;
  }
`
const StyledImageItemWrapper = styled.div`
  width: 50%;
  position: relative;
  transition: opacity 0.35s ease-out;
  :hover {
    opacity: 0.5;
  }
  @media (min-width: 780px) {
    width: 25%;
  }
`

const StyledTitle = styled.h2`
  ${h2}
  text-align: left;
  margin-bottom: 24px;
`

const StyledSubTitle = styled.p`
  font-family: Spartan;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  font-weight: 400;
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  background-color: ${brandGreen};
  color: ${brandLight};
`

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      productOwner: file(relativePath: { eq: "aco_ProductOwner.png" }) {
        childImageSharp {
          fluid(maxWidth: 294) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      softwareEntwickler: file(relativePath: { eq: "aco_software_entw.png" }) {
        childImageSharp {
          fluid(maxWidth: 294) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      itManager: file(relativePath: { eq: "aco_it_manager.png" }) {
        childImageSharp {
          fluid(maxWidth: 294) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      customerSupport: file(relativePath: { eq: "aco_CustomerSupport.png" }) {
        childImageSharp {
          fluid(maxWidth: 294) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const innerWidth = useInnerwidth()
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  return (
    <StyledContentWrapper ref={ref}>
      <Dots number={6} type="top-left" />
      <StyledTextWrapper>
        <StyledTitle>Jobs</StyledTitle>
      </StyledTextWrapper>
      <StyledImgWrapper inView={inView} innerWidth={innerWidth}>
        <StyledImageItemWrapper>
          <Link to="/jobs/product-owner">
            <Img fluid={data.productOwner.childImageSharp.fluid} />
            <StyledSubTitle>Product Owner</StyledSubTitle>
          </Link>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper>
          <Link to="/jobs/software-entwickler">
            <Img fluid={data.softwareEntwickler.childImageSharp.fluid} />
            <StyledSubTitle>Software Entwickler</StyledSubTitle>
          </Link>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper>
          <Link to="/jobs/it-security-manager">
            <Img fluid={data.itManager.childImageSharp.fluid} />
            <StyledSubTitle>IT-Security-Manager</StyledSubTitle>
          </Link>
        </StyledImageItemWrapper>
        <StyledImageItemWrapper>
          <Link to="/jobs/senior-software-entwickler">
            <Img fluid={data.customerSupport.childImageSharp.fluid} />
            <StyledSubTitle>Senior Software Entwickler</StyledSubTitle>
          </Link>
        </StyledImageItemWrapper>
      </StyledImgWrapper>
      <Dots number={7} type="bottom-left" />
    </StyledContentWrapper>
  )
}
export default Content
