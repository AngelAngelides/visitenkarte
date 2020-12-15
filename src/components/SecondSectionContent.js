import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { copy, h2 } from "../theme/typography"
import Dots from "./Dots"
import { useInView } from "react-intersection-observer"
import { useInnerwidth } from "../hooks/useInnerwidth"

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    width: 100%;
  }
  @media (min-width: 1120px) {
    flex-direction: row-reverse;
    justify-content: flex;
    max-width: 1176px;
    margin: 0 auto;
    height: 700px;
    position: relative;
    .gatsby-image-wrapper {
      width: 50%;
    }
  }
`

const StyledTextWrapper = styled.div`
  max-width: 576px;
  text-align: right;
  transition: transform 2.5s ease-out;
  transform: ${({ inView, innerWidth }) =>
    inView ? "translateX(0)" : `translateX(${innerWidth}px)`};
`
const StyledTitle = styled.h2`
  ${h2}
  margin-bottom: 8px;
`
const StyledCopy = styled.h2`
  ${copy}
  margin-bottom: 24px;
`

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "picture_aco_app_preview_1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 534) {
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
      <Dots number={8} type="top-right" />
      <StyledTextWrapper inView={inView} innerWidth={innerWidth}>
        <StyledTitle>
          Professionelle App-Entwicklung vom Konzept über das Design bis zur
          Vermarktung
        </StyledTitle>
        <StyledCopy>
          Mit unserer neuen Dating App haben wir eine neue und innovative Casual
          Dating App auf den Markt gebracht, die Spaß bringt und eine offene und
          direkte Kommunikation einfacher macht - für alle Geschlechter und
          sexuelle Orientierungen.
        </StyledCopy>
      </StyledTextWrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Dots number={8} type="bottom-right" />
    </StyledContentWrapper>
  )
}
export default Content
