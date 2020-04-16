import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>About page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default About
