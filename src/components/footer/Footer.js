import React from "react"

import FooterWrap from "./FooterWrap"

const Footer = () => {
  return (
    <FooterWrap>
      <p>
        Design and code &copy; 2020 - {new Date().getFullYear()} Anders Øksendal
        Larsen
      </p>
      <p>
        Created With <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
      </p>
    </FooterWrap>
  )
}

export default Footer
