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
        relativePath: { eq: "aco_picture_aco_app_preview_1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 534) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledContentWrapper>
      <Dots number={8} type="top-right" />
      <StyledTextWrapper>
        <StyledTitle>
          Professionelle App-Entwicklung vom Konzept über das Design bis zur
          Vermarktung
        </StyledTitle>
        <StyledCopy>
          Jeder Tag kann sexy sein! OneDollarXClub ist die Dating-App mit
          Features, die Spaß bringen und eine offene und direkte Kommunikation
          einfacher machen - für alle Geschlechter und sexuelle Orientierungen.
        </StyledCopy>
      </StyledTextWrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Dots number={8} type="bottom-right" />
    </StyledContentWrapper>
  )
}
export default Content
