import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const Experiments = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Experiments</h1>
    <p>Experiments page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Experiments
