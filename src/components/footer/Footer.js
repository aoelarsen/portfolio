import React from "react"

import FooterWrap from "./FooterWrap"
import FooterInner from "./FooterInner"

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <p>
          Design and code &copy; 2020 &ndash; {new Date().getFullYear()} Anders
          Øksendal Larsen{" "}
        </p>
        <p>
          Created With <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </p>
      </FooterInner>
    </FooterWrap>
  )
}

export default Footer
