import React from "react"

import NavListLi from "./NavListLi"
import NavLink from "./NavLink"

const NavItem = ({ to, children }) => {
  return (
    <NavListLi>
      <NavLink to={to}>{children}</NavLink>
    </NavListLi>
  )
}

export default NavItem
