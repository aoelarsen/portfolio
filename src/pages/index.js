import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Heading from "../components/ui/Heading"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hello! I&apos;m Anders. </Heading>
    <Heading h2>Nice to meet you!</Heading>
    <p>
      Welcome to my small and humble space. Here you'll find some of my
      projects, either as a part of my portfolio, or as experiments where I test
      different things.
    </p>
  </Layout>
)

export default IndexPage
