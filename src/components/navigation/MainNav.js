import React from "react"

import NavList from "./NavList"

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>Articles</li>
        <li>Portfolio</li>
        <li>Experiments</li>
        <li>About</li>
      </NavList>
    </nav>
  )
}

export default MainNav
