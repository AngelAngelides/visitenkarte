import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { brandGreen } from "../theme/colors"

const styledDot = `
  height: 12px;
  width: 12px;
  background-color: ${brandGreen};
  position: absolute;
  display: none;
  @media (min-width: 780px) {
    display: block;
  }
`

const StyledDotTopLeft = styled.div`
  ${styledDot}
  position: absolute;
  top: ${({ num }) => `${(num - 1) * 24}px`};
  left: 0;
`

const StyledDotBotLeft = styled.div`
  ${styledDot}
  position: absolute;
  bottom: ${({ num }) => `${num * 24}px`};
  left: 0;
`

const StyledDotBotRight = styled.div`
  ${styledDot}
  position: absolute;
  bottom: ${({ num }) => `${num * 24}px`};
  right: 0;
`

const StyledDotTopRight = styled.div`
  ${styledDot}
  position: absolute;
  top: ${({ num }) => `${num * 24}px`};
  right: 0;
`

const StyledDotTopCenter = styled.div`
  ${styledDot}
  position: absolute;
  top: ${({ num }) => `${num * 24}px`};
  right: 50%;
  left: 50%;
  margin: 0 auto;
`

const StyledDotBottomCenter = styled.div`
  ${styledDot}
  position: absolute;
  bottom: ${({ num }) => `${num * 24}px`};
  right: 50%;
  left: 50%;
  margin: 0 auto;
`

const Dots = ({ number, type }) => {
  const dotArray = Array.from({ length: number }, (_, index) => index + 1)

  return (
    <>
      {dotArray.map((slot) => {
        switch (type) {
          case "top-left":
            return <StyledDotTopLeft key={slot} num={slot} />
          case "bottom-left":
            return <StyledDotBotLeft key={slot - 1} num={slot -1} />
          case "bottom-right":
            return <StyledDotBotRight key={slot - 1} num={slot - 1} />
          case "top-right":
            return <StyledDotTopRight key={slot} num={slot} />
            case "top-center":
            return <StyledDotTopCenter key={slot} num={slot} />
            case "bottom-center":
            return <StyledDotBottomCenter key={slot - 1} num={slot - 1} />
          default:
            return null
        }
      })}
    </>
  )
}

Dots.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default Dots
