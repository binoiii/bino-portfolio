import React from "react"

import Layout from "../components/layout"
import SEO from "../components/Seo/seo"
import BackButton from "../components/Utilities/BackButton"

const Thankyou = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="p-4 md:p-0 m-0 sm:m-10 md:m-16 min-h-screen flex flex-col font-primary">
      <BackButton label="Back to Home" />
      <h1 className="mb-8 text-5xl text-blue-450 font-bold">Thank You</h1>
      <p className="text-gray-700">
        Excited to get back you! I'll respond to you the soonest.
      </p>
    </div>
  </Layout>
)

export default Thankyou
