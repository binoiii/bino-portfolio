import React from "react"
import queryPortfolioData from "../../utilities/queryPortfolioData"
import PortfolioCard from "./PortfolioCard"

const PortfolioCards = () => {
  const portfolio = queryPortfolioData()

  return (
    <section className="p-4 pb-20 md:p-0 m-0 sm:m-10 md:m-16">
      <h2 className="mb-8 font-mono text-blue-450 text-4xl md:text-5xl font-bold">
        My Portfolio
      </h2>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 auto-rows-auto gap-8">
          {portfolio &&
            portfolio.map(({ node }) => (
              <PortfolioCard key={node.id} portfolio={node} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioCards
