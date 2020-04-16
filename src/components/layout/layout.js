import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../../globalStyles/GlobalStyles"
import MainWrap from "./MainWrap"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <GlobalStyles />
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
