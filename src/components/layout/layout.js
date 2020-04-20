import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../../globalStyles/GlobalStyles"
import MainWrap from "./MainWrap"
import GridBox from "./GridBox"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <GridBox margin="0 auto" maxWidth="1920px">
      <GlobalStyles />
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </GridBox>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
