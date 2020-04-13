import React from "react"

import HeaderWrap from "./HeaderWrap"
import Logo from "../logo/Logo"
import MainNav from "../navigation/MainNav"

const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <MainNav />
    </HeaderWrap>
  )
}

export default Header
