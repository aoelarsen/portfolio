import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Front-end developer - Anders Øksendal Larsen</h1>
    <p>
      Welcome to my small and humble space. Here you'll find some of my
      projects, either as a part of my portfolio, or as experiments where I test
      different things.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
