import React from "react"

import LogoWrap from "./LogoWrap"
import LogoLink from "./LogoLink"

const Logo = () => {
  return (
    <LogoWrap>
      <LogoLink to="/">
        <strong>Anders Øksendal Larsen</strong>
        <br />
        Front-end developer <span>- under development</span>
      </LogoLink>
    </LogoWrap>
  )
}

export default Logo
