import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { brandLight } from "../theme/colors"

const StyledSection = styled.section`
  max-width: 1600px;
  margin: 24px auto 0;
  background-color: ${brandLight};
  padding: 24px;
  @media (min-width: 780px) {
    padding: 0 24px;
  }
`

const Section = ({ children, id }) => (
  <StyledSection id={id}>{children}</StyledSection>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default Section
