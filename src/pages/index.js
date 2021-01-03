import React from "react"

import Layout from "../components/layout"
import Home from "../components/Home/Home"
import SEO from "../components/Seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
