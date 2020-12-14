import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Logo from "../assets/Logo_AppConceptionOne.inline.svg"
import { brandGreen, brandLight, brandGrey } from "../theme/colors"
import { scrollToId } from "../utils.js/scrollToId"

const StyledNavigationWrapper = styled.nav`
  background-color: ${brandLight};
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1600px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const StyledNavigation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1176px;
  margin: 0 auto;
`

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 100%;
  justify-content: flex-start;
  svg {
    height: 24px;
    width: 24px;
  }
  @media (min-width: 780px) {
    width: 50%;
    height: 96px;
    svg {
      height: 48px;
      width: 48px;
    }
  }
`

const StyledLogoTitle = styled.span`
  color: ${brandGreen};
  font-family: Spartan;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 17px;
  text-align: center;
  margin-left: 12px;
  @media (min-width: 780px) {
    font-size: 20px;
    line-height: 23px;
  }
`

const StyledBurgerPlaceholder = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  @media (min-width: 780px) {
    display: none;
  }
`

const StyledMenu = styled.div`
  display: none;
  @media (min-width: 780px) {
    display: block;
  }
`

const StyledMenuItem = styled.button`
  color: ${brandGrey};
  font-family: Spartan;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.78px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin-left: ${({ isFirst }) => !isFirst && "16px"};
`

const Navigation = ({ isMain }) => (
  <StyledNavigationWrapper>
    <StyledNavigation>
      <StyledLogo>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/">
          <StyledLogoTitle>AppConceptionOne</StyledLogoTitle>
        </Link>
        <StyledBurgerPlaceholder />
      </StyledLogo>
      <>
        {isMain ? (
          <StyledMenu>
            <StyledMenuItem isFirst onClick={e => scrollToId(e, "first")}>
              Über uns
            </StyledMenuItem>
            <StyledMenuItem onClick={e => scrollToId(e, "jobs")}>
              Jobs
            </StyledMenuItem>
            <StyledMenuItem onClick={e => scrollToId(e, "partner")}>
              Partner
            </StyledMenuItem>
            <StyledMenuItem onClick={e => scrollToId(e, "last")}>
              Kontakt
            </StyledMenuItem>
          </StyledMenu>
        ) : (
          <StyledMenu>
            <Link to="/#first">
              <StyledMenuItem>Über uns</StyledMenuItem>
            </Link>
            <Link to="/#jobs">
              <StyledMenuItem>Jobs</StyledMenuItem>
            </Link>
            <Link to="/#partner">
              <StyledMenuItem>Partner</StyledMenuItem>
            </Link>
            <Link to="/#kontakt">
              <StyledMenuItem>Kontakt</StyledMenuItem>
            </Link>
          </StyledMenu>
        )}
      </>
    </StyledNavigation>
  </StyledNavigationWrapper>
)

Navigation.defaultProps = {
  isMain: false,
}

Navigation.propTypes = {
  isMain: PropTypes.bool,
}

export default Navigation
