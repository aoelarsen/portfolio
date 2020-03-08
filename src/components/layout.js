import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  return (
    <div>
      <header>{title}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Anders Øksendal Larsen</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
