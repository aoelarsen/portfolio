import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio</h1>
    <p>Portfolio page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Portfolio
