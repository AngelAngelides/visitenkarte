import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { brandGreen } from "../theme/colors"
import { copy, h2, h3 } from "../theme/typography"

const StyledBasicPageBlock = styled.div`
  max-width: 1176px;
  margin: 42px auto 0;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  text-align: left;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  h2 {
    ${h2}
    margin-bottom: 12px;
  }

  h3 {
    ${h3}
    margin-bottom: 12px;
  }

  a,
  li,
  p {
    ${copy}
    margin-bottom: 12px;
  }

  li {
    margin-left: 40px;
    ::marker {
      color: ${brandGreen}
    }
  }

  a {
    text-decoration: underline;
    :hover {
      color: ${brandGreen};
      transition: color 0.35s ease;
    }
  }
  @media (min-width: 480px) {
    padding: 68px;
  }
`

const BasicPage = ({ html }) => {
  return (
    <StyledBasicPageBlock
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

BasicPage.propTypes = {
  html: PropTypes.string.isRequired,
}

export default BasicPage
