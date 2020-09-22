/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("Location: ", location)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        <div className="nav">
          <Link to="/">
            <button className={location.pathname == "/" ? "underline" : ""}>
              Home
            </button>
          </Link>
          <div className="vertical-line"></div>
          <Link to="/impressum">
            <button
              className={location.pathname == "/impressum" ? "underline" : ""}
            >
              Impressum
            </button>
          </Link>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
