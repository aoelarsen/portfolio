import React from "react"
import styled, { css } from "styled-components"

const baseStyle = css`
  color: var(--black);
  font-weight: ${props => {
    if (props.weight) return props.weight
    return "700"
  }};
  text-align: ${props => {
    if (props.center) return "center"
    if (props.right) return "right"
    return "left"
  }};
  width: 100%;
  padding: ${props => {
    if (props.padding) return props.padding
    return "1.5rem 0 1rem 0"
  }};
`

const HeadingOne = styled.h1`
  ${baseStyle}
  font-weight: 700;
  padding: 0.5rem 0 1rem 0;
  font-size: 1.9rem;
  @media screen and (min-width: 900px) {
    font-size: 3.5rem;
    padding-top: 3rem;
  }
`

const HeadingTwo = styled.h2`
  ${baseStyle}
  font-size: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media screen and (min-width: 900px) {
    padding-top: 1.5rem;
  }
`

const HeadingThree = styled.h3`
  ${baseStyle}
  padding-top: 1.3rem;
  padding-bottom: 1rem;
  @media screen and (min-width: 1100px) {
    padding-top: 1.5rem;
  }
`

const HeadingFour = styled.h4`
  ${baseStyle}
`

const HeadingFive = styled.h5`
  ${baseStyle}
  padding-left: 0.5rem;
`

const Heading = ({
  h2,
  h3,
  h4,
  h5,
  weight,
  right,
  center,
  invert,
  ...props
}) => {
  if (h2)
    return (
      <HeadingTwo
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h3)
    return (
      <HeadingThree
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h4)
    return (
      <HeadingFour
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h5)
    return (
      <HeadingFive
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  return (
    <HeadingOne
      weight={weight}
      right={right}
      center={center}
      invert={invert}
      {...props}
    />
  )
}

export default Heading
