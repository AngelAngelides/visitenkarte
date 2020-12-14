import React from "react"
import SEO from "../../components/Seo"
import { graphql } from "gatsby"
import Section from "../../components/Section"
import BasicPage from "../../components/BasicPage"
import Navigation from "../../components/Navigation"
import SideBar from "../../components/Sidebar"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/product-owner.md/" } }
    ) {
      nodes {
        html
      }
    }
  }
`

export default function ProductOwner({ data }) {
  return (
    <>
      <SEO title="Product Owner" />
      <Navigation />
      <Section>
        <BasicPage html={data.allMarkdownRemark.nodes[0].html} />
      </Section>
      <SideBar />
    </>
  )
}
