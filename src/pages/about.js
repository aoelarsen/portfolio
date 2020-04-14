import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>About page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default About
