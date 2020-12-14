import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
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
    flex-direction: row;
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
  transition: transform 2.5s ease-out;
  transform: ${({ inView, innerWidth }) =>
    inView ? "translateX(0)" : `translateX(-${innerWidth}px)`};
`
const StyledTitle = styled.h2`
  ${h2}
  margin-bottom: 8px;
`
const StyledCopy = styled.p`
  ${copy}
  margin-bottom: 24px;
`

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "aco_picture_aco_app_preview_5.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 576) {
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
      <Dots number={8} type="top-left" />
      <StyledTextWrapper inView={inView} innerWidth={innerWidth}>
        <StyledTitle>
          Professionelle App-Entwicklung – von der Konzeption über das Design
          bis zum Go Live
        </StyledTitle>
        <StyledCopy>
          Bei der Entwicklung unserer Apps stehen die User im Zentrum. Für sie
          setzen wir auf Usability, hohe Sicherheitsstandards und Einfachheit.
          Wir entwickeln für Android und iOS.
        </StyledCopy>
      </StyledTextWrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Dots number={8} type="bottom-left" />
    </StyledContentWrapper>
  )
}

Content.propTypes = {
  inView: PropTypes.bool.isRequired,
}

export default Content
