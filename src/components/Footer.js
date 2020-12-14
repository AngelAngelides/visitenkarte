import React from "react"
import styled from "styled-components"
import { brandGreen } from "../theme/colors"
import { footer } from "../theme/typography"

const StyledFooter = styled.footer`
  height: 144px;
  background-color: ${brandGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledText = styled.p`
  ${footer}
  margin-bottom: ${({ top }) => top && "12px"};
`

const Footer = () => (
  <StyledFooter>
    <StyledText top>© AppConceptionOne 2020</StyledText>
    <StyledText>Made with ♥︎ by galaniprojects GmbH</StyledText>
  </StyledFooter>
)

export default Footer
