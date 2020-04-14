import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Articles</h1>
    <p>Articles page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Articles
