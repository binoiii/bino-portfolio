import React from "react"

import Layout from "../components/layout"
import SEO from "../components/Seo/seo"
import BackButton from "../components/Utilities/BackButton"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="p-4 md:p-0 m-0 sm:m-10 md:m-16 min-h-screen flex flex-col font-mono">
      <BackButton />
      <h1 className="mb-8 text-5xl text-blue-450 font-bold">Not Found</h1>
      <p className="text-gray-700">
        You just hit a route that doesn&#39;t exist...
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
