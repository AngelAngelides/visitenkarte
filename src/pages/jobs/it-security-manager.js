import React from "react"
import SEO from "../../components/Seo"
import Navigation from "../../components/Navigation"
import { graphql } from "gatsby"
import Section from "../../components/Section"
import BasicPage from "../../components/BasicPage"
import SideBar from "../../components/Sidebar"

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/it-security-manager.md/" } }
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
      <SEO title="It Security Manager" />
      <Navigation />
      <Section>
        <BasicPage html={data.allMarkdownRemark.nodes[0].html} />
      </Section>
      <SideBar />
    </>
  )
}
