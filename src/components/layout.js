import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../globalStyles/GlobalStyles"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
