import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCards from "../components/PortfolioCards/PortfolioCards"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioCards />
  </Layout>
)

export default Portfolio
