import React from "react"

import NavWrap from "./NavWrap"
import NavList from "./NavList"
import NavItem from "./NavItem"

const MainNav = () => {
  return (
    <NavWrap>
      <NavList>
        <NavItem to="/articles">Articles</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/experiments">Experiments</NavItem>
        <NavItem to="/about">About</NavItem>
      </NavList>
    </NavWrap>
  )
}

export default MainNav
