import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { copy, h2 } from "../theme/typography"
import Dots from "./Dots"

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
  return (
    <StyledContentWrapper>
      <Dots number={8} type="top-left" />
      <StyledTextWrapper>
        <StyledTitle>
          Professionelle App-Entwicklung – von der Konzeption über das Design
          bis zum Go Live.
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
export default Content
