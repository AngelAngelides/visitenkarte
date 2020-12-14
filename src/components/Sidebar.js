import React, { useContext } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Burger from "../assets/aco_burgermenu.inline.svg"
import CloseIcon from "../assets/hamburger_close.inline.svg"
import { SideBarContext } from "../context"
import { Link } from "gatsby"
import { brandGreen } from "../theme/colors"
import { scrollToId } from "../utils.js/scrollToId"

export const StyledSidebar = styled.div`
  padding-top: 75px;
  width: 296px;
  height: 100vh;
  background-color: ${brandGreen};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${({ hasOpenSideBar }) =>
    hasOpenSideBar ? "translateX(0)" : "translateX(347px)"};
  transition: transform 0.35s ease;
  z-index: 20;
  @media (min-width: 480px) {
    width: 347px;
  }
`

export const StyledCloseIcon = styled.div`
  position: fixed;
  top: 12px;
  right: 24px;
  pointer-events: auto;
  z-index: 100;
  display: block;
  svg {
    height: 27px;
    width: 26px;
  }
  @media (min-width: 780px) {
    display: none;
  }
`

export const StyledBurger = styled.div`
  position: fixed;
  top: 12px;
  right: 24px;
  pointer-events: auto;
  z-index: 100;
  display: block;
  svg {
    height: 25px;
    width: 36px;
  }
  @media (min-width: 780px) {
    display: none;
  }
`

export const StyledLink = styled.div`
  color: #ffffff;
  font-family: Spartan;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 32px;
  padding-right: 24px;
  text-align: right;
  text-transform: uppercase;
  @media (min-width: 480px) {
    font-size: 18px;
  }
`
const SideBar = ({ isMain }) => {
  const { hasOpenSideBar, onClick } = useContext(SideBarContext)
  return (
    <>
      {!hasOpenSideBar ? (
        <StyledBurger>
          <Burger onClick={onClick} />
        </StyledBurger>
      ) : (
        <StyledCloseIcon>
          <CloseIcon onClick={onClick} />
        </StyledCloseIcon>
      )}
      <StyledSidebar hasOpenSideBar={hasOpenSideBar}>
        {isMain ? (
          <>
            <StyledLink
              onClick={e => {
                onClick()
                scrollToId(e, "first")
              }}
            >
              Über uns
            </StyledLink>
            <StyledLink
              onClick={e => {
                onClick()
                scrollToId(e, "jobs")
              }}
            >
              Jobs
            </StyledLink>
            <StyledLink
              onClick={e => {
                onClick()
                scrollToId(e, "partner")
              }}
            >
              Partner
            </StyledLink>
            <StyledLink
              onClick={e => {
                onClick()
                scrollToId(e, "last")
              }}
            >
              Kontakt
            </StyledLink>
          </>
        ) : (
          <>
            <Link to="/#first">
              <StyledLink>Über uns</StyledLink>
            </Link>
            <Link to="/#jobs">
              <StyledLink>Jobs</StyledLink>
            </Link>
            <Link to="/#partner">
              <StyledLink>Partner</StyledLink>
            </Link>
            <Link to="/#kontakt">
              <StyledLink>Kontakt</StyledLink>
            </Link>
          </>
        )}
      </StyledSidebar>
    </>
  )
}

SideBar.defaultProps = {
  isMain: false,
}

SideBar.propTypes = {
  isMain: PropTypes.bool,
}

export default SideBar
